var camera, renderer, scene;
var group = [];

create();

function create(){
  sceneSetup();

  //add camera
  camera = createCamera({x:1});

  //add camera controls
  controlsOrbit({limit:false});

  //add flycontrols
  //controlsFly();

  //add cubes

  loadDAE();
  //get all mesh objects and make them clickable;
  setTimeout(function(){
    CLICKABLE = meshList();
  },1000);

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
