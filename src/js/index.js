///////////////////////////////////////////////////////
// Option 1: Import the entire three.js core library.
// import * as THREE from 'three';
import * as THREE from 'three';
import * as dat from 'dat.gui';

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

// const path = require('path');

// const scene = new THREE.Scene();


// ///////////////////////////////////////////////////////
// // Option 2: Import just the parts you need.
// import { Scene } from 'three';
//
// const scene = new Scene();

function init() {

    var scene = new THREE.Scene();
    var gui = new dat.GUI();

    var enableFog = false;
    if (enableFog){
        scene.fog = new THREE.FogExp2(0xffffff, 0.2);
    }


    // var box = getBox(1, 1, 1);
    // var boxGrid = getBoxGrid(10, 1.5);
    var boxGrid = getBoxGrid(6, 2.5);

    var plane = getPlane(20);
    // var planeMaterial = getMaterial('standard', 'rgb(255, 255, 255)');
    // var plane = getPlane_mat(planeMaterial,20);

    // var pointLight = getPointLight(1);
    // var spotLight = getSpotLight(1);
    var directionalLight = getDirectionalLight(1);
    var sphere = getSphere(0.05);
    var helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    var ambientLight = new getAmbientLight(2);

    // gltfLoad('assets/models/gltf/', 'inroom.glb');
    var path_inroom = 'assets/models/gltf/inroom.glb';
    var path_cracc ='assets/models/gltf/cracc.glb';
    var path_tablo_bargh_b ='assets/models/gltf/tablo-bargh-b.glb';
    var path_tablo_bargh_s ='assets/models/gltf/tablo-bargh-s.glb';



    /// row
    var gltf_position = new THREE.Vector3(9,8,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(9,6,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(9,4,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(9,2,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(9,0,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    /// row
    var gltf_position = new THREE.Vector3(5,8,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(5,6,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(5,4,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(5,2,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(5,0,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    /// row
    var gltf_position = new THREE.Vector3(1,8,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(1,6,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(1,4,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(1,2,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(1,0,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    /// row
    var gltf_position = new THREE.Vector3(-3,8,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-3,6,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-3,4,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-3,2,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-3,0,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);


    /// row
    var gltf_position = new THREE.Vector3(-7,8,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-7,6,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-7,4,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-7,2,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-7,0,-0.02);
    gltfLoad(path_inroom, plane, gltf_position);


    /// bargh - back
    var gltf_position = new THREE.Vector3(1,-8,-0.02);
    gltfLoad(path_cracc, plane, gltf_position);

    var gltf_position = new THREE.Vector3(-1,1.3,-0.02);
    gltfLoad(path_tablo_bargh_b, plane, gltf_position);
    //
    var gltf_position = new THREE.Vector3(6,-8,-2.7);
    gltfLoad(path_tablo_bargh_s, plane, gltf_position);


    // var obj_inroom = gltfLoad('assets/models/gltf/', 'inroom.glb');
    // scene.add(obj_inroom);


    // box.position.y = box.geometry.parameters.height/2;
    plane.rotation.x = Math.PI/2 ;

    // pointLight.position.y = 2;
    // pointLight.intensity = 2;
    // spotLight.position.y = 2;
    // spotLight.intensity = 2;
    directionalLight.position.x = 2;
    directionalLight.position.y = 8.5;
    directionalLight.position.z = 8;
    directionalLight.intensity = 2;

    // gui.add(pointLight, 'intensity', 1, 10);
    // gui.add(pointLight.position, 'y', 1, 5);
    // gui.add(pointLight.position, 'x', -5, 5);
    // gui.add(pointLight.position, 'z', -5, 5);
    // gui.add(spotLight, 'intensity', 1, 10);
    // gui.add(spotLight.position, 'y', 1, 20);
    // gui.add(spotLight.position, 'x', -5, 20);
    // gui.add(spotLight.position, 'z', -5, 20);
    // gui.add(spotLight, 'penumbra', 0, 1);
    gui.add(directionalLight, 'intensity', 1, 10);
    gui.add(directionalLight.position, 'y', 1, 20);
    gui.add(directionalLight.position, 'x', -5, 20);
    gui.add(directionalLight.position, 'z', -20, 20);

    // dat.gui
    // var folder1 = gui.addFolder('light_1');
    // folder1.add(lightLeft, 'intensity', 0, 10);
    // folder1.add(lightLeft.position, 'x', -5, 15);
    // folder1.add(lightLeft.position, 'y', -5, 15);
    // folder1.add(lightLeft.position, 'z', -5, 15);
    //
    // var folder2 = gui.addFolder('light_2');
    // folder2.add(lightRight, 'intensity', 0, 10);
    // folder2.add(lightRight.position, 'x', -5, 15);
    // folder2.add(lightRight.position, 'y', -5, 15);
    // folder2.add(lightRight.position, 'z', -5, 15);

    plane.name = 'plane-1';

    // plane.add(box);
    // scene.add(box);
    scene.add(plane);

    // pointLight.add(sphere);
    // scene.add(pointLight);
    // spotLight.add(sphere);
    // scene.add(spotLight);
    directionalLight.add(sphere);
    scene.add(directionalLight);
    // scene.add(boxGrid);
    // scene.add(helper);
    scene.add(ambientLight);


    // var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.x = 1 ;
    camera.position.y = 2 ;
    camera.position.z = 5 ;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var cameraGroup = new THREE.Group();
    cameraGroup.add(camera);
    cameraGroup.name = 'sceneCameraGroup';
    scene.add(cameraGroup);

    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;

    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setClearColor('#ffffff')
    renderer.setClearColor('rgb(120, 120, 120)')
    // document.body.appendChild( renderer.domElement );
    document.getElementById('webgl').appendChild(renderer.domElement);

    // renderer.render( scene, camera );
    // // renderer.render(
    // //     scene,
    // //     camera
    // // );

    // var controls = new THREE.OrbitControls(camera, renderer.domElement);
    var controls = new OrbitControls(camera, renderer.domElement);

    update(renderer, scene, camera, controls);

    return scene;

}

function getBox(width, height, depth) {
    var geometry = new THREE.BoxGeometry(width, height, depth);
    // var material = new THREE.MeshBasicMaterial({
    //     color: 0x00ff00
    // });
    var material = new THREE.MeshPhongMaterial({
        color: 'rgb(120, 120, 120)'
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;

    return mesh;
}

function getBoxGrid(amount, separationMultiplier) {
    var group = new THREE.Group();

    for (var i=0; i < amount; i++){
        var obj = getBox(1,3,1);
        obj.position.x = i * separationMultiplier;
        obj.position.y = obj.geometry.parameters.height/2;
        group.add(obj);
        for (var j=0; j < amount; j++){
            var obj = getBox(1,3,1);
            obj.position.x = i * separationMultiplier;
            obj.position.y = obj.geometry.parameters.height/2;
            obj.position.z = j * separationMultiplier;
            group.add(obj);
        }
    }

    group.position.x = -(separationMultiplier * (amount-1))/2;
    group.position.z = -(separationMultiplier * (amount-1))/2;

    return group;
}

function getPlane(size) {
    var geometry = new THREE.PlaneGeometry(size, size);
    // var material = new THREE.MeshBasicMaterial({
    //     color: 0xff0000,
    //     side: THREE.DoubleSide
    // });
    var material = new THREE.MeshPhongMaterial({
        color: 'rgb(120, 120, 120)',
        side: THREE.DoubleSide
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.receiveShadow = true;

    return mesh;
}

function getPlane_mat(material, size) {
    var geometry = new THREE.PlaneGeometry(size, size);
    material.side = THREE.DoubleSide;

    var obj = new THREE.Mesh(
        geometry,
        material
    );
    obj.receiveShadow = true;

    return obj;
}

function getSphere(size) {
    var geometry = new THREE.SphereGeometry(size, 24, 24);
    var material = new THREE.MeshBasicMaterial({
        color: 'rgb(255, 255, 255)'
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh;
}

function getPointLight(intensity) {
    var light = new THREE.PointLight(0xffffff, intensity);
    light.castShadow = true;

    return light;
}

function getSpotLight(intensity) {
    var light = new THREE.SpotLight(0xffffff, intensity);
    light.castShadow = true;

    light.shadow.bias = 0.001

    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    return light;
}

function getDirectionalLight(intensity) {
    var light = new THREE.DirectionalLight(0xffffff, intensity);
    light.castShadow = true;

    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;

    return light;
}

function getAmbientLight(intensity) {
    var light = new THREE.AmbientLight('rgb(10, 30, 50)', intensity);


    return light;
}

function getMaterial(type, color) {
    var selectMaterial;
    var materialOptions = {
        color: color === undefined ? 'rqb(255, 255, 255)' : color,
        wireframe: true
    };
    switch (type) {
        case 'basic':
            selectMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;
        case 'lambert':
            selectMaterial = new THREE.MeshLambertMaterial(materialOptions);
            break;
        case 'phong':
            selectMaterial = new THREE.MeshPhongMaterial(materialOptions);
            break;
        case 'standard':
            selectMaterial = new THREE.MeshStandardMaterial(materialOptions);
            break;
        default:
            selectMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;
    }
    return selectMaterial;

}

function gltfLoad(path, parent, position) {
    // path = 'dist/assets/models/gltf/';
    //path = 'assets/models/gltf/inroom.glb'
    // var loader = new GLTFLoader().setPath( path );
    var loader = new GLTFLoader();
    // loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
    //
    // };
    loader.load(
        // resource URL
        // 'models/monster.obj',
        // 'dist/assets/models/gltf/inroom.glb',
        // 'assets/models/gltf/inroom.glb',
        path,
        // called when resource is loaded
        function ( object ) {

            // scene.add( object.scene );
            // parent.add( object.scene );
            object.scene.rotation.x = -Math.PI/2 ;
            // object.scene.position.y = 2 ;

            object.scene.position.add(position);
            parent.add( object.scene );

            // const obj = object.scene;
            console.log('GLTF is added to scene');
            // return  obj;

        },
        // called when loading is in progresses
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );
}

function update(renderer, scene, camera, controls) {
    renderer.render( scene, camera );

    // var plane = scene.getObjectByName('plane-1');
    // plane.rotation.z += 0.0005;
    //
    // scene.traverse(function (child) {
    //     child.scale.x += 0.001;
    //
    //     console.log('scale is : ' + child.scale.x);
    //     if (child.scale.x >= 1.3){
    //         child.scale.x = 1;
    //     }
    // })

    // rotate camera around the origin
    var sceneCameraGroup = scene.getObjectByName('sceneCameraGroup');
    if (sceneCameraGroup) {
        // sceneCameraGroup.rotation.y += 0.001;
        sceneCameraGroup.rotation.y += 0.003;
    }

    controls.update();

    requestAnimationFrame(function () {
        update(renderer, scene, camera, controls);
    })
}


var scene = init();