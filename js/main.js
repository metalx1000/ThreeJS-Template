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

  cylinder = createCylinder({radtop:.2,radbottom:.2,height:1,segments:32,openend:false,material: "normal",color:0xff0000});
  cylinder.position.x = 2; 

  //start animation
  animate();

}

function animate(){
  //Uncomment for flycontrols
  //var delta = clock.getDelta();
  //controls.update( delta );

  cameraRotate({direction : -1});
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
