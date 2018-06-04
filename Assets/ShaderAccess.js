#pragma strict
var scriptname : GameObject; 
private var shader1:Shader;
private var shader2:Shader;
var rend:Renderer;
public var mr: MeshRenderer;

function Start () {
		rend = mr;
		shader1 = Shader.Find ("Diffuse");
		shader2 = Shader.Find ("Reflective/VertexLit");
		scriptname = GameObject.Find("SpinSphere");
}

function Update () {
	if (scriptname.GetComponent(Enemy1).isMoving == false){
			rend.material.shader = shader2;
		} else {
			rend.material.shader = shader1;

		}
}

