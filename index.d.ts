// Type definitions for screenshot-desktop 1.12
// Project: https://github.com/bencevans/screenshot-desktop
// Definitions by: Usama Ahsan <https://github.com/usama8800>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = akeyScreenshotDesktop;


declare function akeyScreenshotDesktop(options?: { format?: akeyScreenshotDesktop.ImageFormat, screen?: akeyScreenshotDesktop.DisplayID, displays: akeyScreenshotDesktop.Display[] }): Promise<Buffer>;
declare function akeyScreenshotDesktop(options?: { filename: string, format?: akeyScreenshotDesktop.ImageFormat, screen?: akeyScreenshotDesktop.DisplayID, displays: akeyScreenshotDesktop.Display[] }): Promise<string>;

declare namespace akeyScreenshotDesktop {
    type DisplayID = number; // mac上DisplayId是number, windows是string

    interface Display {
      id: DisplayID, 
      name: string 
    }
    type ImageFormat =
        'bmp' |
        'emf' |
        'exif' |
        'jpg' |
        'jpeg' |
        'gif' |
        'png' |
        'tiff' |
        'wmf';

    function listDisplays(): Promise<Array<{ id: DisplayID, name: string }>>;
    function all(): Promise<Array<{ id: DisplayID, name: string }>>;
}