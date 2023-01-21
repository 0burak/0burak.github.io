import {
    Scene,
    Engine,
    Color3,
    Vector3,
    Mesh,
    MeshBuilder,
    HemisphericLight,
    EnvironmentHelper,
    WebXRDefaultExperience,
    ArcRotateCamera,
    StandardMaterial
} from "@babylonjs/core";

import '@babylonjs/core/Materials/Textures/Loaders';
import '@babylonjs/core/Materials/Node/Blocks';


export class basicScene {
    scene: Scene;
    engine: Engine;
    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        const hemiLight = new HemisphericLight(
            "hemiLight",
            new Vector3(0, 1, 0),
            this.scene
        );
        hemiLight.intensity = 0.5;

        const sphereD = 1.0
        const sphere = MeshBuilder.CreateSphere('Sphere', { segments: 16, diameter: sphereD }, this.scene)
        sphere.position.x = 0
        sphere.position.y = sphereD * 2
        sphere.position.z = 0

        const rMat = new StandardMaterial("matR", this.scene)
        rMat.diffuseColor = new Color3(1.0, 0, 0)
        sphere.material = rMat

        const camera = new ArcRotateCamera("Camera", -(Math.PI / 4) * 3, Math.PI / 4, 10, new Vector3(0, 0, 0), this.scene);
        camera.attachControl(true);

        this.initXR();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        })

    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        return scene
    }

    async initXR() {
        const envHelper = new EnvironmentHelper({
            skyboxSize: 30,
            groundColor: new Color3(0.5, 0.5, 0.5),
        }, this.scene)

        const xr = await WebXRDefaultExperience.CreateAsync(this.scene, {
            floorMeshes: [envHelper?.ground as Mesh],
            optionalFeatures: true,
        })
    }
}