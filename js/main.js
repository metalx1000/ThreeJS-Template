var camera, renderer, scene;
var group = [];

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
  createCube({x:0,y:0,z:0,sx:1,sy:1,sz:1,material:"normal"});
  for(var i = 1;i < 5;i++){
    createCube({x:i,y:0,z:0,sx:1,sy:1,sz:1,material:"normal"});
    createCube({x:-i,y:0,z:0,sx:1,sy:1,sz:1,material:"normal"});
  }

  //start animation
  animate();

}

function animate(){
  //Uncomment for flycontrols
  //var delta = clock.getDelta();
  //controls.update( delta );

  CLICKGROUP.forEach(function(i){
    if(i != null){
      i.rotation.x+=.1;
    }
  });

  renderer.render(scene, camera);
  requestAnimationFrame(function(){
    animate();
  });
}
