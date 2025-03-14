// Type definitions for Sketchfab API integration

declare interface SketchfabAPIMessage {
  type: string;
  [key: string]: any;
}

interface SketchfabCameraLookAt {
  type: 'SET_CAMERA_LOOK_AT';
  eye: [number, number, number];
  target: [number, number, number];
  up: [number, number, number];
}

interface SketchfabInitializedMessage {
  type: 'INITIALIZED';
}

interface SketchfabAPI {
  start: () => void;
  stop: () => void;
  addEventListener: (eventType: string, callback: (api: SketchfabAPI) => void) => void;
  removeEventListener: (eventType: string, callback: (api: SketchfabAPI) => void) => void;
  setCameraLookAt: (
    position: [number, number, number], 
    target: [number, number, number], 
    duration?: number
  ) => void;
}

// Sketchfab constructor
interface SketchfabConstructor {
  new (iframe: HTMLIFrameElement): {
    init: (
      uid: string, 
      options: { 
        success: (api: SketchfabAPI) => void;
        error: (error: Error) => void;
        [key: string]: any;
      }
    ) => void;
  };
}

// Extend Window interface to allow for postMessage to Sketchfab iframe
interface Window {
  addEventListener(type: 'message', listener: (event: MessageEvent<SketchfabAPIMessage>) => void): void;
  Sketchfab: SketchfabConstructor;
}