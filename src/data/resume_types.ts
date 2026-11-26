export interface Resume_types {
    profile: Profile;
    education: Education[];
    experience: Experience[];
    projects: Projects[];
    skills: SkillGroup [];
    contact: Contact;
}

export interface Profile {
    name: string;
    headline: string;
    summary: string;
    location: string;
}

export interface Education {
    qualification: string;
    institution: string;
    startDate: string;
    endDate: string;
    city: string;
}

export interface Experience {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
}

export interface Projects {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Contact {
    email: string;
    linkedin: string;
}