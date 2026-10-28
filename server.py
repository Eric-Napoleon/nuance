#!/usr/bin/env python3
"""
Nuance Local Server
Serves the PWA locally and prints both localhost and your local Wi-Fi IP
so you can open and install Nuance directly on your phone!
"""

import http.server
import socket
import socketserver
import os
import sys

PORT = 8080

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class DualStackServer(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching headers for PWA service workers
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    local_ip = get_local_ip()

    print("\n" + "="*56)
    print("  ✨ Nuance Vocabulary PWA is Running! ✨")
    print("="*56)
    print(f"  • On your computer:  http://localhost:{PORT}")
    print(f"  • On your phone:     http://{local_ip}:{PORT}")
    print("="*56)
    print("  💡 Phone Instructions:")
    print("     1. Make sure your phone is connected to the same Wi-Fi.")
    print(f"     2. Open Safari (iOS) or Chrome (Android) to: http://{local_ip}:{PORT}")
    print("     3. Tap 'Share' -> 'Add to Home Screen' (iOS)")
    print("        or tap (⋮) -> 'Install App' (Android).")
    print("     4. Enjoy Nuance offline anytime like a native app!\n")
    print("  Press Ctrl+C to stop the server.\n")

    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), DualStackServer) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server. Have a great day expanding your vocabulary!")
        sys.exit(0)

if __name__ == "__main__":
    main()
