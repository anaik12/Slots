using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class MovingPlane : MonoBehaviour {
	public float scrollSpeed = 0.5F;
	public int moveCount = 0;
	public GameObject spin; 
	public static bool spinState = false;
	// Use this for initialization
	void Start () {
		spin = GameObject.Find("CoinSpin");
		//spinComponent = spin.GetComponent ();
	}



	// Update is called once per frame
	void FixedUpdate () {
		float offset = Time.time * scrollSpeed;
		//transform.Translate(0, 0, Time.deltaTime * 10);
		//print (offset);
		//bool spinState = spin.GetComponent<Spin>().move;
		if(((int)offset % 3 == 0 && offset % 3 < 0.01F)|| spinState == true ) {
			//transform.position = new Vector3 (Random.Range (-0.27f, 0.27f), Random.Range (.27f, .72f), -1.5f); //for capsulespin
			transform.position = new Vector3 (Random.Range (-0.54f, 0.53f), Random.Range (-0.30f, 0.16f), -1.4f); //Random.Range (-1.3f, -1.3f));
			//transform.position = new Vector3 (Random.Range (-12.00f, 12.00f), Random.Range (5.27f, 5.72f), -1.5f);
			//print (offset);
			moveCount = moveCount + 1;
		}
		//print(transform.position.x);
	}
}
