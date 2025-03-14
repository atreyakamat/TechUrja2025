// SketchfabClient.ts
// A typed wrapper for the Sketchfab API

interface SketchfabClientOptions {
  success: (api: SketchfabAPI) => void;
  error: (error: Error) => void;
  autostart?: 0 | 1;
  camera?: 0 | 1; 
  ui_stop?: 0 | 1;
  ui_inspector?: 0 | 1;
  ui_infos?: 0 | 1;
  ui_controls?: 0 | 1;
  ui_watermark?: 0 | 1;
  ui_watermark_link?: 0 | 1;
  ui_theme?: 'dark' | 'light';
  transparent?: 0 | 1;
  preload?: 0 | 1;
}

interface SketchfabAPIOptions {
  animate_scale?: boolean;
  animation_autoplay?: boolean;
  animation_cycle?: boolean;
  animation_index?: number;
  annotations_visible?: boolean;
  annotations_tooltip_visible?: boolean;
  autospin?: '0' | '1';
  autostart?: '0' | '1';
  cardboard?: boolean;
  camera?: number;
  preload?: '0' | '1';
  scrollwheel?: '0' | '1';
  style?: string;
  transparent?: '0' | '1';
  ui_animations?: '0' | '1';
  ui_annotations?: '0' | '1';
  ui_controls?: '0' | '1';
  ui_fullscreen?: '0' | '1';
  ui_general_controls?: '0' | '1';
  ui_help?: '0' | '1';
  ui_hint?: '0' | '1';
  ui_infos?: '0' | '1';
  ui_inspector?: '0' | '1';
  ui_settings?: '0' | '1';
  ui_stop?: '0' | '1';
  ui_theme?: 'dark' | 'light';
  ui_theatre?: '0' | '1';
  ui_vr?: '0' | '1';
  ui_watermark?: '0' | '1';
  ui_watermark_link?: '0' | '1';
}

interface SketchfabAPI {
  start: () => void;
  stop: () => void;
  addEventListener: (eventType: string, callback: (api: SketchfabAPI) => void) => void;
  removeEventListener: (eventType: string, callback: (api: SketchfabAPI) => void) => void;
  getCameraLookAt: (callback: (err: Error | null, camera: {
    position: [number, number, number];
    target: [number, number, number];
    up: [number, number, number];
  }) => void) => void;
  setCameraLookAt: (
    position: [number, number, number], 
    target: [number, number, number], 
    duration?: number
  ) => void;
  getNodeMap: (callback: (err: Error | null, nodeMap: Record<string, number>) => void) => void;
  getSceneGraph: (callback: (err: Error | null, nodeMap: any) => void) => void;
  setBackground: (color: { r: number, g: number, b: number }, callback?: (err: Error | null) => void) => void;
  setMaterial: (materialId: number, material: any, callback?: (err: Error | null) => void) => void;
  getMaterialList: (callback: (err: Error | null, materials: any[]) => void) => void;
  getTextureList: (callback: (err: Error | null, textures: any[]) => void) => void;
  setAnnotationVisibility: (visible: 0 | 1, callback?: (err: Error | null) => void) => void;
  setAnnotationsTooltipVisibility: (visible: 0 | 1, callback?: (err: Error | null) => void) => void;
  getAnimations: (callback: (err: Error | null, animations: any[]) => void) => void;
  setCurrentAnimationByIndex: (index: number, callback?: (err: Error | null) => void) => void;
  setCurrentAnimationByUID: (uid: string, callback?: (err: Error | null) => void) => void;
  setCamera: (camera: string, callback?: (err: Error | null) => void) => void;
  recenterCamera: (callback?: (err: Error | null) => void) => void;
  setCycleMode: (isCycling: boolean, callback?: (err: Error | null) => void) => void;
  setTextureQuality: (quality: 'SD' | 'HD', callback?: (err: Error | null) => void) => void;
  setSketchfabURLOptions: (options: Partial<SketchfabAPIOptions>, callback?: (err: Error | null) => void) => void;
  getChannelObject: (materialId: number, channelName: string, callback: (err: Error | null, channel: any) => void) => void;
  getNodeByName: (name: string, callback: (err: Error | null, nodeId: number) => void) => void;
  getNodeByObject: (objectId: number, callback: (err: Error | null, nodeId: number) => void) => void;
  setNodeVisibility: (nodeId: number, visible: boolean, callback?: (err: Error | null) => void) => void;
  setNodeTranslation: (nodeId: number, translation: [number, number, number], callback?: (err: Error | null) => void) => void;
  setNodeRotation: (nodeId: number, rotation: [number, number, number], callback?: (err: Error | null) => void) => void;
  setNodeScale: (nodeId: number, scale: [number, number, number], callback?: (err: Error | null) => void) => void;
}

class SketchfabClient {
  private iframe: HTMLIFrameElement;
  private uid: string;
  private api: SketchfabAPI | null = null;
  private isApiReady: boolean = false;
  private onReadyCallbacks: (() => void)[] = [];

  constructor(iframeElement: HTMLIFrameElement, uid: string) {
    this.iframe = iframeElement;
    this.uid = uid;
  }

  init(options: Partial<SketchfabClientOptions> = {}): Promise<SketchfabAPI> {
    return new Promise((resolve, reject) => {
      const client = new (window as any).Sketchfab(this.iframe);
      
      const defaultOptions: SketchfabClientOptions = {
        success: (api: SketchfabAPI) => {
          this.api = api;
          
          api.start();
          
          // Wait for the model to be ready
          api.addEventListener('viewerready', () => {
            console.log('Viewer ready');
            this.isApiReady = true;
            
            // Run any callbacks that were registered before the API was ready
            this.onReadyCallbacks.forEach(callback => callback());
            this.onReadyCallbacks = [];
            
            resolve(api);
          });
        },
        error: (error: Error) => {
          console.error('Sketchfab API error:', error);
          reject(error);
        },
        ui_controls: 0,
        ui_infos: 0,
        ui_inspector: 0,
        ui_stop: 0,
        ui_watermark: 0,
        ui_watermark_link: 0,
        camera: 0,
        autostart: 1,
        transparent: 0,
        ui_theme: 'dark',
        preload: 1
      };
      
      const mergedOptions = { ...defaultOptions, ...options };
      
      client.init(this.uid, {
        success: mergedOptions.success,
        error: mergedOptions.error,
        ui_controls: mergedOptions.ui_controls,
        ui_infos: mergedOptions.ui_infos,
        ui_stop: mergedOptions.ui_stop,
        ui_inspector: mergedOptions.ui_inspector,
        ui_watermark: mergedOptions.ui_watermark,
        ui_watermark_link: mergedOptions.ui_watermark_link,
        ui_theme: mergedOptions.ui_theme,
        camera: mergedOptions.camera,
        autostart: mergedOptions.autostart,
        preload: mergedOptions.preload,
        transparent: mergedOptions.transparent
      });
    });
  }
  
  onReady(callback: () => void): void {
    if (this.isApiReady) {
      callback();
    } else {
      this.onReadyCallbacks.push(callback);
    }
  }
  
  setCameraLookAt(
    position: [number, number, number], 
    target: [number, number, number] = [0, 0, 0],
    duration: number = 1
  ): void {
    if (!this.api || !this.isApiReady) {
      console.warn('Sketchfab API not ready');
      return;
    }
    
    this.api.setCameraLookAt(position, target, duration);
  }
  
  getApi(): SketchfabAPI | null {
    return this.api;
  }
}

export default SketchfabClient;