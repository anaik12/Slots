#pragma strict

//var rend : Renderer;
function Start () {
	
}

function Update () {
	var rend = GetComponentInChildren(Renderer);
	rend.enabled = false;
}
