document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.querySelector('#reveal');

    modelViewer.addEventListener('load', () => {

        console.log('Loaded !');

        /*
        const scene = modelViewer.scene;
        const model = scene.model;

        if (model) {
            const meshes = model.children;
            for (let i = 0; i < meshes.length; i++) {
                const mesh = meshes[i];

                if (mesh.morphTargetInfluences) {
                    // Example: Set the first blendshape/morph target to 50%
                    mesh.morphTargetInfluences[0] = 0.5;
                }
            }
        }
        */
    });
});

window.setViseme = function(viseme) {
    window.Android.log('Viseme changed to: ' + viseme);
}

window.setState = function(state) {
    window.Android.log('State changed to: ' + state);
}

console.log = function(message) {
    window.Android.log(message);
}

console.error = function(message) {
    window.Android.log('Error: ' + message);
}

console.log('Started !');