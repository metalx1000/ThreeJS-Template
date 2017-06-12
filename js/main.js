var camera, renderer, scene;

create();

function create(){
  //setup scene
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  //add camera
  camera = createCamera({x:1});

  //add flycontrols
  //controlsFly();

  //add cube
  cube = createCube({x:1});

  //start animation
  animate();
}

function animate(){
  //Uncomment for flycontrols
  //var delta = clock.getDelta();
  //controls.update( delta );

  renderer.render(scene, camera);
  requestAnimationFrame(function(){
    animate();
  });
}

