/// <reference path="Subject.ts" />

namespace Subjects {
  // Add experienceTeachingC attribute using declaration merging
  export interface Teacher {
    experienceTeachingC?: number;
    firstName:string;
    lastName: string;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
