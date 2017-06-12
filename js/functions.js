function createCube(d){
  //possition
  if(typeof d.x === "undefined"){d.x = 0;}
  if(typeof d.y === "undefined"){d.y = 0;}
  if(typeof d.z === "undefined"){d.z = 0;}

  //size
  if(typeof d.sx === "undefined"){d.sx = 100;}
  if(typeof d.sy === "undefined"){d.sy = 100;}
  if(typeof d.sz === "undefined"){d.sz = 100;}

  var cube = new THREE.Mesh(new THREE.CubeGeometry(d.sx,d.sy,d.sz), new THREE.MeshNormalMaterial());
  cube.position.x = d.x;
  cube.position.y = d.y;
  cube.position.z = d.z;
  cube.rotation.x = 10;
  cube.rotation.z = .5;
  scene.add(cube);
  return cube;
}


function createCamera(d){
  //possition
  if(typeof d.x === "undefined"){d.x = .70;}
  if(typeof d.y === "undefined"){d.y = -400;}
  if(typeof d.z === "undefined"){d.z = 400;}

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.rotation.x = d.x;
  camera.position.y = d.y;
  camera.position.z = d.z;

  return camera;
}
