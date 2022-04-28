function startUpdateStat() {
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');
    let localCounter = getDecodedFrames(localVideo);
    let remoteCounter = getDecodedFrames(remoteVideo);
    setInterval(() => {
        let localCounter1 = getDecodedFrames(localVideo);
        const fps1 =  localCounter1 - localCounter;
        localCounter = localCounter1;
        document.querySelector('[data-content="localFps"]').textContent = "FPS:" + fps1;

        let remoteCounter1 = getDecodedFrames(remoteVideo);
        const fps2 = remoteCounter1 - remoteCounter;
        remoteCounter = remoteCounter1;
        document.querySelector('[data-content="remoteFps"]').textContent = "FPS:" + fps2;
    }, 1000);
}