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

  //add camera controls
  controlsOrbit({limit:false});

  //add flycontrols
  //controlsFly();

  //add cube
  //createCube({x:0,y:0,z:0,sx:1,sy:1,sz:1,material:"normal"});

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
