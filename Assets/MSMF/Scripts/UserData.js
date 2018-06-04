public var coinText : TextMesh;
public var levelText : TextMesh;
public var expText : TextMesh;
public var expBar : SpriteRenderer;

public var audioInfo : AudioInfo[];

@HideInInspector
public var coins : int;

//@HideInInspector
public var fluxCoins : int;

@HideInInspector
public var level : int;

@HideInInspector
public var experience : float;

@HideInInspector
public var lastLevelExperience : float;

@HideInInspector
public var experienceToLevel : float;

@HideInInspector
public var incrementMuliplier : int;

private static var userInstance : UserData;

function Awake()
{
    if(userInstance == null)
    {
        userInstance = this;
    }
    else
    {
        Destroy(gameObject);
    }
    DontDestroyOnLoad(gameObject);

	if(!PlayerPrefs.HasKey("Coins"))
	{
		//PlayerPrefs.SetFloat("1", coins);
		PlayerPrefs.SetInt("Level", 1);
		PlayerPrefs.SetFloat("Experience", 0);
		PlayerPrefs.SetFloat("LastLevelExperience", 0);
		PlayerPrefs.SetFloat("ExperienceToLevel", 1000);
	}
	
	//coins = PlayerPrefs.GetFloat("Coins");
	//coins = PlayerPrefs.GetFloat("1000");
	coins = 1000;
	level = PlayerPrefs.GetInt("Level");
	experience = PlayerPrefs.GetFloat("Experience");
	lastLevelExperience = PlayerPrefs.GetFloat("LastLevelExperience");
	experienceToLevel = PlayerPrefs.GetFloat("ExperienceToLevel");
	fluxCoins = coins;
	//fluxCoins = 1000.0f;
	var lastDividend = experience - lastLevelExperience;
	var expDividend = experienceToLevel - lastLevelExperience;
	expBar.transform.localScale.x = lastDividend/expDividend * 148.5;
	
	UpdateUserInfo();
}

function Update()
{
	if(fluxCoins < coins)
	{
		fluxCoins = Mathf.MoveTowards(fluxCoins, coins, incrementMuliplier * Time.deltaTime);
		coinText.text = fluxCoins.ToString("00");
		if(!GetComponent.<AudioSource>().isPlaying)
		{
			if(audioInfo.Length > 0)
			{
				if(GetComponent.<AudioSource>().clip != audioInfo[0].audioClip)
				{
					GetComponent.<AudioSource>().clip = audioInfo[0].audioClip;
					GetComponent.<AudioSource>().volume = audioInfo[0].audioVolume;
				}
			}
			//GetComponent.<AudioSource>().Play();
		}
	}
	if(fluxCoins > coins)
	{
		fluxCoins = coins;
		//fluxCoins = 1000.0f;
	}
	if(fluxCoins == coins && GetComponent.<AudioSource>().loop)
	{
		GetComponent.<AudioSource>().loop = false;
	}
}

function AddCoins(amount : float, increment : boolean, speed : int)
{
	coins += amount;
	incrementMuliplier = speed * 10;
	PlayerPrefs.SetFloat("Coins", coins);
	if(!increment)
	{
		fluxCoins = coins;
	}
	UpdateUserInfo();
}


function AddExperience(amount : float)
{
	experience += amount;
	PlayerPrefs.SetFloat("Experience", experience);
	if(experience >= experienceToLevel)
	{
		level += 1;
		lastLevelExperience = experienceToLevel;
		experienceToLevel = experienceToLevel * 2;
		
		PlayerPrefs.SetInt("Level", level);
		PlayerPrefs.SetFloat("LastLevelExperience", lastLevelExperience);
		PlayerPrefs.SetFloat("ExperienceToLevel", experienceToLevel);
	}
	UpdateUserInfo();
	var lastDividend = experience - lastLevelExperience;
	var expDividend = experienceToLevel - lastLevelExperience;
	expBar.transform.localScale.x = lastDividend/expDividend * 148.5;
}

function UpdateUserInfo()
{
	coinText.text = fluxCoins.ToString("00");
	levelText.text = level.ToString();
	expText.text = experience.ToString("n0") + " / " + experienceToLevel.ToString("n0");
}

