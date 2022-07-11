# ARKit
ARKit notes

FaceRecognition is based on the tutorials:<br/>
- https://hackernoon.com/arkit-101-how-to-build-augmented-reality-ar-based-resume-using-face-recognition-b28941aee2fb

<h2>Issues collection</h2>
<p><b>Swift Sdtlib tool error: Task failed with exit code 1</b></p>
  <p>Ref: https://stackoverflow.com/questions/41205250/swift-sdtlib-tool-error-task-failed-with-exit-code-1</p>
  <p>Moved my iOS developer certificate from local to system using Key Chain.</p>

  How to resolve the issue:<br/>
  Steps:

    1. Close Xcode.
    2. Open Key Chain.
    3. Find the iOS Developer cert in Local.
    4. Drag and drop the cert from Local to the System tab.
    5. Enter admin password when prompted.
    6. Start Xcode and build project for your device.

