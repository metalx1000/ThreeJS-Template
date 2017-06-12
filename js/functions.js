//resize canvas on window resize
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize( event ) {
  SCREEN_HEIGHT = window.innerHeight;
  SCREEN_WIDTH  = window.innerWidth;
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  camera.updateProjectionMatrix();
  //composer.reset();
}

function createCube(d){
  if(typeof d === "undefined"){d = {};}
  //possition
  if(typeof d.x === "undefined"){d.x = 0;}
  if(typeof d.y === "undefined"){d.y = 0;}
  if(typeof d.z === "undefined"){d.z = 0;}

  //size
  if(typeof d.sx === "undefined"){d.sx = 1;}
  if(typeof d.sy === "undefined"){d.sy = 1;}
  if(typeof d.sz === "undefined"){d.sz = 1;}

  //color
  if(typeof d.color === "undefined"){d.color = ( Math.random() * 0xffffff );}

  var cube = new THREE.Mesh(new THREE.CubeGeometry(d.sx,d.sy,d.sz), new THREE.MeshNormalMaterial());
  cube.position.x = d.x;
  cube.position.y = d.y;
  cube.position.z = d.z;
  cube.rotation.x = 10;
  cube.rotation.z = .5;
  scene.add(cube);
  return cube;
}


function createCylinder(d){
  if(typeof d === "undefined"){d = {};}

  if(typeof d.radtop === "undefined"){d.radtop = .2;}
  if(typeof d.radbottom === "undefined"){d.radbottom = .2;}
  if(typeof d.h === "undefined"){d.h = 1;}
  if(typeof d.segments === "undefined"){d.segments = 32;}
  if(typeof d.openend === "undefined"){d.openend = false;}

  //colors and materials
  if(typeof d.material === "undefined"){d.material = "normal";}
  if(typeof d.color === "undefined"){d.color = ( Math.random() * 0xffffff );}

  var geometry = new THREE.CylinderGeometry( d.radtop, d.radbottom, d.h, d.segments );
  var material = materials(d.material, d.color);
  var c = new THREE.Mesh( geometry, material );
  scene.add(c);
  return c;
}

function materials(m,c){
  if(m == "normal"){
    var material = new THREE.MeshNormalMaterial();
  }else if(m == "basic"){
    var material = new THREE.MeshBasicMaterial( {color: c} );
  }else if(m == "line"){
    var material = new THREE.LineBasicMaterial({color: c});
  }else{
    var material = new THREE.MeshNormalMaterial();
  }

  return material;
}

function createCamera(d){
  //possition
  if(typeof d.x === "undefined"){d.x = 2;}
  if(typeof d.y === "undefined"){d.y = 2;}
  if(typeof d.z === "undefined"){d.z = 3;}

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  //camera.rotation.x = d.x;
  camera.position.set( d.x, d.y, d.z );
  camera.lookAt(scene.position);
  return camera;
}


function controlsFly(){
  clock = new THREE.Clock();
  controls = new THREE.FlyControls( camera );
  controls.movementSpeed = 1000;
  //controls.domElement = container;
  controls.rollSpeed = Math.PI / 24;
  controls.autoForward = false;
  controls.dragToLook = false;
}

function loadDAE(_dae){
  if(typeof _dae === "undefined"){_dae = "monkey.dae";}
  _dae = "models/dae/" + _dae;
  console.log("loading "+_dae);
  var loader = new THREE.ColladaLoader();
  loader.options.convertUpAxis = true;
  loader.load( _dae, function ( collada ) {
    dae = collada.scene;
    scene.add(dae);
  });
}

function controlsOrbit(d){
  if(typeof d === "undefined"){d = {};}
  if(typeof d.limit === "undefined"){d.limit = false;}
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  if(d.limit == true ){
    console.log(controls.maxPolarAngle);
    controls.maxPolarAngle = Math.PI/2 - .1; 
  }
}

function createGrid(d){
  if(typeof d === "undefined"){d = {};}
  if(typeof d.size === "undefined"){d.size = 30;}
  if(typeof d.step === "undefined"){d.step = .2;}
  //colors and materials
  if(typeof d.material === "undefined"){d.material = "line";}
  if(typeof d.color === "undefined"){d.color = "green";}

  var geometry = new THREE.Geometry();
  var material = materials(d.material, d.color);

  for ( var i = - d.size; i <= d.size; i += d.step){
    geometry.vertices.push(new THREE.Vector3( - d.size, - 0.04, i ));
    geometry.vertices.push(new THREE.Vector3( d.size, - 0.04, i ));

    geometry.vertices.push(new THREE.Vector3( i, - 0.04, - d.size ));
    geometry.vertices.push(new THREE.Vector3( i, - 0.04, d.size ));

  }

  var grid = new THREE.Line( geometry, material, THREE.LineSegments);
  scene.add(grid);
  return grid;
}
