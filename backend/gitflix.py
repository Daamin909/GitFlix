import requests
import random
import datetime
import os
from dotenv import load_dotenv

load_dotenv()
apiURL = "https://api.github.com"
tokeytoken = {"Authorization": f"token {os.getenv('GH_TOKEN')}"}

def getRandomRepo():
    page = random.randint(1, 100)  
    url = f"{apiURL}/search/repositories?q={f"stars:>={random.randint(3, 10)}"}&sort=stars&order=asc&page={page}&per_page=1"
    
    response = requests.get(url, headers=tokeytoken)
    if response.status_code == 200:
        datatatatata = response.json().get("items", [])
        if datatatatata:
            return datatatatata[0]
    return None

def getLangs(repoFullName):
    url = f"{apiURL}/repos/{repoFullName}/languages"
    response = requests.get(url, headers=tokeytoken)
    if response.status_code == 200:
        return response.json()
    return {}

def getContribs(repoFullName):
    url = f"{apiURL}/repos/{repoFullName}/contributors"
    response = requests.get(url, headers=tokeytoken)
    if response.status_code == 200:
        contributors = response.json()
        return [
            {"username": c["login"], "avatar_url": c["avatar_url"], "contributions": c["contributions"]}
            for c in contributors[:3]
        ]
    return []

def getRandomData(repoData, languages, contributors):
    ageInDays = (datetime.datetime.now() - datetime.datetime.strptime(repoData["created_at"], "%Y-%m-%dT%H:%M:%SZ")).days
    mostActiveContributor = contributors[0]["username"] if contributors else "no one lol"
    mostUsedLanguage = max(languages, key=languages.get, default="None")
    contribsLine = f"Built with {contributors[0]['contributions']} contributions." if contributors else "This repo has no contributors yet💀"
    updatedRepo = "This repo is really alive. 👾" if repoData["updated_at"] else "Repo is abandoned.. Or is it? vsauce music plays"
    return {
        "age_in_days": ageInDays,
        "most_active_contributor": mostActiveContributor,
        "most_used_language": mostUsedLanguage,
        "contributors": contribsLine,
        "updated_repo": updatedRepo
    }

def fetchRepoInfo():
    repoData = getRandomRepo()
    if not repoData:
        return {"error": "repo fetch failed"}
    
    languages = getLangs(repoData["full_name"])
    contributors = getContribs(repoData["full_name"])
    funFacts = getRandomData(repoData, languages, contributors)

    repoInfo = {
        "repo_info": {
            "name": repoData["name"],
            "full_name": repoData["full_name"],
            "owner": {
                "username": repoData["owner"]["login"],
                "avatar_url": repoData["owner"]["avatar_url"],
                "profile_url": repoData["owner"]["html_url"]
            },
            "description": repoData['description'] if repoData['description'] else "None" ,
            "url": repoData["html_url"],
            "homepage": repoData.get("homepage", "N/A"),
            "created": repoData["created_at"],
            "updated": repoData["updated_at"],
            "pushed": repoData["pushed_at"],
            "visibility": repoData["visibility"],
            "license": repoData["license"]["name"] if repoData["license"] else "None",
            "size_kb": repoData["size"],
            "stars": repoData["stargazers_count"],
            "forks": repoData["forks_count"],
            "topics": repoData.get("topics", []),
            "primary_language": max(languages, key=languages.get, default="Unknown"),
            "languages": languages,
            "contributors": contributors,
            "fun_facts": funFacts
        }
    }
    return repoInfo

