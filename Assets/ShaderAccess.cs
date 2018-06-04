using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShaderAccess : MonoBehaviour {
	Material m_Material;
	public Shader shader1;
	public Shader shader2;
	public Renderer rend;
	//enemy enemy1 = new enemy ();
	// Use this for initialization
	void Start () {
		rend = GetComponent<MeshRenderer> ();
		shader1 = Shader.Find ("Diffuse");
		shader2 = Shader.Find ("Specular");


	}
	
	// Update is called once per frame
	void Update () {
		if (enemy.isMoving == false) {
			rend.material.shader = shader2;
		} else {
			rend.material.shader = shader1;

		}
	}
}
