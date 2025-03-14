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

// Extend Window interface to allow for postMessage to Sketchfab iframe
interface Window {
  addEventListener(type: 'message', listener: (event: MessageEvent<SketchfabAPIMessage>) => void): void;
}