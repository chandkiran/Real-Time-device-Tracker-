# Real-Time Device Tracker

A real-time device tracker that monitors devices and displays their locations on a map using WebSockets. The application updates the position markers dynamically and removes the markers when the device disconnects, providing real-time updates of connected devices.

## Features

- **Real-time Tracking:** Tracks devices in real time using WebSockets.
- **Dynamic Markers:** Displays a marker on the map for each connected device.
- **Automatic Marker Removal:** Removes the marker when the device disconnects.
- **Multi-User Support:** Shows the marker if another person is using the same device.

## How It Works

1. The tracker connects to the WebSocket server and listens for updates on device locations.
2. When a device is detected, a marker is placed on the map indicating the device's location.
3. If another person connects using the same device, the marker for that device is updated accordingly.
4. Once a device disconnects, its marker is automatically removed from the map.

