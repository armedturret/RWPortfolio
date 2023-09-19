import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './project';

/*
  name: string,
  skills: string[],
  thumbnail: string,
  description: string,
  url: string
*/

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {name: "Deepspace Dredgers", skills: ["C#", "Unity", "Blender", "Mirror"], thumbnail: "",
      description: "Programing and designing an underwater co-op horror game in which a navigator attempts to guide a captain through the depths. Developed in Unity with Mirror and Steamworks for networking. The project is currently ongoing.",
      url: "https://www.youtube.com/playlist?list=PLqiA7QcV2e74JYHWpPOScb1n87v5D9Hcu"},
    {name: "IT Simulator", skills: ["C#", "Unity", "Blender", "Photon"], thumbnail: "",
    description: "Lead developer/programmer/designer of an asymmetric co-op horror game set in an underground office building. Implemented networking through the Photon and Steamworks libraries. Designed, implemented, and playtested the game as well as created various 3D assets.",
    url: "https://store.steampowered.com/app/1903730/IT_Simulator/"},
    {name: "Cave Plague", skills: ["C#", "Unity"], thumbnail: "",
    description: "A platformer game developed in 48 hours for the RGDC Halloween Game Jam 2022 in which the player must shoot the environment to clear a path. Won the best overall category. Wrote the code  in C# and designed the levels.",
    url: "https://armedturret.itch.io/cave-plague"},
    {name: "Direct Current", skills: ["C#", "Unity"], thumbnail: "",
    description: "A top-down shooter/infinite runner game developed in 48 hours for the RGDC Spring Game Jam 2023. The game consisted of raiding trains in order to heal your character as well as fuel the train car. The game won the best overall category. Programmed the shooter sections and roguelike elements using C#.",
    url: "https://sockman.itch.io/direct-current"},
    {name: "Denyork Valley", skills: ["C++", "OpenGL", "SDL", "OpenAL"], thumbnail: "",
    description: "Developed a 2D top-down game from scratch including creating the assets and programming the base engine in C++ with SDL, OpenGL, and OpenAL.",
    url: "https://armedturret.itch.io/denyork-valley"},
    {name: "Propane Engine", skills: ["C++", "OpenGL", "glm"], thumbnail: "",
    description: "Programmed a 3D game engine using C++ and OpenGL. The engine had the ability to render a scene view and can be extended through components.",
    url: "https://github.com/armedturret/PropaneEngine"}
  ]

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
