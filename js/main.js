/*-- ------------------------------------------------------------ 
###################################################################### 
#Copyright (C) 2018  Kris Occhipinti
#https://filmsbykris.com

#This program is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.

#This program is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#GNU General Public License for more details.

#You should have received a copy of the GNU General Public License
#along with this program.  If not, see <http://www.gnu.org/licenses/>.
###################################################################### 

*/

var camera, scene, renderer, controls, raycaster;

var mouse = {
  x: 0,
  y: 0
},
INTERSECTED;

init();
animate();

function init() {
  scene = new THREE.Scene();

  createRenderer();
  createCamera();
  cube = createCube();
  light = createLights();
  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
  //TWEEN.update();
}

function createCamera(){
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000 );
  camera.position.z = 400;
  camera.position.y = 400;
  camera.lookAt(scene.position);

  //addcontrols
  controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function createRenderer(){
  renderer = new THREE.WebGLRenderer( { antialias: true,alpha: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

}

function createCube(){
  var size = 200;
  var geometry = new THREE.BoxGeometry( size, size, size );
  var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
  var cube = new THREE.Mesh( geometry, material );
  cube.position.set( 0, 0, 0 );
  scene.add(cube);
  return cube;
} 

function createLights(){
  light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 5, 5, 10 ).normalize();
  scene.add( light );

  light2 = new THREE.DirectionalLight( 0xffffff, 1 );
  light2.position.set(-1,-10,-5).normalize();
  scene.add( light2 );

  return true;
}
