import { IExperience } from '../types/IExperience';

export const experiences: IExperience[] = [
    {
        company: 'Grass Valley',
        location: 'Hillsboro, OR',
        role: 'Software Engineer',
        startDate: new Date(2016, 3),
        endDate: null,
        highlights: [
            'Contribute towards release requirements of the GV STRATUS software.',
            'Implement new features for GV STRATUS using C#, .NET, WCF RESTful services, WPF and SQL Server.',
            'Debug, design and implement new features for existing WPF applications.',
            'Create an IL weaver that can automatically modify and add data members to data contracts.',
            'Create an automation framework using Selenium for testing the GV STRATUS Web Client. Reduced manual testing effort and made it easier to create/maintain tests.',
            'Create unit tests using NUnit, Unity, and FakeItEasy.'
        ],
        technologies: [
            'C#',
            '.NET',
            'WCF',
            'WPF',
            'SQL Server',
            'Fody',
            'Selenium',
            'FlaUI',
            'NUnit',
            'Unity',
            'FakeItEasy'
        ]
    },
    {
        company: 'Intel',
        location: 'Hillsboro, OR',
        role: 'Software Engineer Intern',
        startDate: new Date(2015, 5),
        endDate: new Date (2015, 11),
        highlights: [
            'Implement a feature that uses UART (universal asynchronous receiver/transmitter) to send and receive debug information from a wireless charging board. Save firmware developer hours by giving hardware validation engineers more control over the firmware.',
            'Automate the process of sending/receiving data through UART using python.',
            'Debug and enhance multi-threaded WPF applications.'
        ],
        technologies: [
            'C#',
            '.NET',
            'WPF',
            'Python',
            'C'
        ]
    },
    {
        company: 'ON Semiconductor',
        location: 'Gresham, OR',
        role: 'Computer-Integrated Manufacturing Intern',
        startDate: new Date(2014, 2),
        endDate: new Date (2014, 8),
        highlights: [
            'Create web forms using ASP.NET and C#. Automate the process of submitting wafer defect reports; improve the effectiveness and efficiency of the quality control process. Convert web applications from PHP to ASP.NET.',
            'Eliminate the need of a third party software. Create a C# console app that parses wafer data and uploads the resulting files to a server via FTP where the data will be used to analyze silicon wafer defects.'
        ],
        technologies: [
            'C#',
            '.NET',
            'ASP.NET',
            'JavaScript',
            'JQuery',
            'CSS',
            'PHP',
            'HTML'
        ]
    }
];
