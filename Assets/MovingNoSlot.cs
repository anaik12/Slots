using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovingNoSlot : MonoBehaviour {
	public float scrollSpeed = 0.5F;
	// Use this for initialization
	void Start () {

	}



	// Update is called once per frame
	void FixedUpdate () {
		float offset = Time.time * scrollSpeed;
		//transform.Translate(0, 0, Time.deltaTime * 10);
		//print (offset);
		if((int)offset % 2 == 0 && offset % 3 < 0.01F) {
			//transform.position = new Vector3 (Random.Range (-0.27f, 0.27f), Random.Range (.27f, .72f), -1.5f); //for capsulespin
			transform.position = new Vector3 (Random.Range (-0.6f, 0.6f), Random.Range (.1f, .9f), Random.Range (-1.2f, -.9f));
			//transform.position = new Vector3 (Random.Range (-12.00f, 12.00f), Random.Range (5.27f, 5.72f), -1.5f);
			//print (offset);
		}
		//print(transform.position.x);
	}
}
