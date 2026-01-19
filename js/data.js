// /js/data.js - CORRECTED WITH WORKING DOWNLOAD LINKS
window.odliteData = {
    "apps": [
        {
            id: 1,
            name: "GIMP",
            category: "Graphics & Design",
            description: "The GNU Image Manipulation Program. A free and open-source raster graphics editor.",
            os: ["linux", "windows", "macos"],
            rating: 4.7,
            downloads: 1250000,
            isNew: false,
            // WORKING DIRECT DOWNLOAD LINKS:
            downloadUrls: {
                windows: "https://download.gimp.org/mirror/pub/gimp/v2.10/windows/gimp-2.10.34-setup.exe",
                macos: "https://download.gimp.org/gimp/v3.0/macos/gimp-3.0.6-arm64.dmg.torrent",
                linux: "https://download.gimp.org/gimp/v3.0/linux/GIMP-3.0.6-x86_64.AppImage.torrent"
            },
            downloadPage: "https://www.gimp.org/downloads/",
            fileSize: "250 MB",
            lastUpdated: "2025-11-15"
        },
        {
            id: 2,
            name: "LibreOffice",
            category: "Productivity",
            description: "A powerful and free office suite, compatible with Microsoft Office formats.",
            os: ["linux", "windows", "macos"],
            rating: 4.6,
            downloads: 980000,
            isNew: false,
            downloadUrls: {
                windows: "https://www.libreoffice.org/donate/dl/win-x86_64/25.8.4/en-GB/LibreOffice_25.8.4_Win_x86-64.msi",
                macos: "https://www.libreoffice.org/donate/dl/mac-aarch64/25.8.4/en-GB/LibreOffice_25.8.4_MacOS_aarch64.dmg",
                linux: "https://www.libreoffice.org/donate/dl/deb-x86_64/25.8.4/en-GB/LibreOffice_25.8.4_Linux_x86-64_deb.tar.gz"
            },
            downloadPage: "https://www.libreoffice.org/download/",
            fileSize: "320 MB",
            lastUpdated: "2025-12-01"
        },
        {
            id: 3,
            name: "Blender",
            category: "3D & Animation",
            description: "Free and open-source 3D creation suite. Supports modeling, animation, rendering, and more.",
            os: ["linux", "windows", "macos"],
            rating: 4.9,
            downloads: 2100000,
            isNew: true,
            downloadUrls: {
                windows: "https://www.blender.org/download/release/Blender5.0/blender-5.0.1-windows-x64.msi",
                macos: "https://www.blender.org/download/release/Blender5.0/blender-5.0.1-macos-arm64.dmg",
                linux: "https://www.blender.org/download/release/Blender5.0/blender-5.0.1-linux-x64.tar.xz"
            },
            downloadPage: "https://www.blender.org/download/",
            fileSize: "280 MB",
            lastUpdated: "2025-12-10"
        },
        {
            id: 4,
            name: "Wine",
            category: "Utility",
            description: "Run Windows apps on Linux/macOS.",
            os: ["linux", "macos"],
            rating: 4.5,
            downloads: 1000000,
            isNew: false,
            downloadUrls: {
                macos: "https://download.macupdate.com/app/mac/17376/wine/download",
                linux: "https://gitlab.winehq.org/wine/wine/-/wikis/Download"
            },
            downloadPage: "https://www.winehq.org/",
            fileSize: "30 MB",
            lastUpdated: "2026-1-7"
        },
        {
            id: 5,
            name: "Bottles",
            category: "Utility",
            description: "Manage Wine prefixes and environments.",
            os: ["linux", "macos"],
            rating: 4.8,
            downloads: 500000,
            isNew: false,
            downloadUrls: {
                macos: "https://winebottler.kronenberg.org/",
                linux: "https://flathub.org/en/apps/com.usebottles.bottles"
            },
            downloadPage: "https://usebottles.com/",
            fileSize: "150 MB",
            lastUpdated: "2026-1-9"
        },
        {
            id: 6,
            name: "Lutris",
            category: "Game Manager",
            description: "Central gaming manager for Linux.",
            os: ["linux", "macos"],
            rating: 4.7,
            downloads: 1000000,
            isNew: false,
            downloadUrls: {
                macos: "https://lutris.net/downloads",
                linux: "https://flathub.org/en/apps/net.lutris.Lutris"
            },
            downloadPage: "https://lutris.net/",
            fileSize: "10 MB",
            lastUpdated: "2026-1-3"
        },
        {
            id: 7,
            name: "VS Code",
            category: "Code Editor",
            description: "Modern, extensible source code editor.",
            os: ["linux", "windows", "macos"],
            rating: 4.9,
            downloads: 50000000,
            isNew: false,
            downloadUrls: {
                windows: "https://code.visualstudio.com/docs/?dv=win64user",
                macos: "https://code.visualstudio.com/docs/?dv=osx",
                linux: "https://code.visualstudio.com/docs/?dv=linux64_deb"
            },
            downloadPage: "https://code.visualstudio.com/",
            fileSize: "90 MB",
            lastUpdated: "2026-1-5"
        },
        {
            id: 8,
            name: "Visual Studio",
            category: "IDE",
            description: "Full-featured IDE for .NET and C++.",
            os: ["windows"],
            rating: 4.6,
            downloads: 10000000,
            isNew: false,
            downloadUrls: {
                windows: "https://visualstudio.microsoft.com/"
            },
            downloadPage: "https://visualstudio.microsoft.com/",
            fileSize: "3 GB",
            lastUpdated: "2026-1-4"
        },
        {
            id: 9,
            name: "Sublime Text",
            category: "Code Editor",
            description: "High-performance, lightweight code editor.",
            os: ["linux", "windows", "macos"],
            rating: 4.5,
            downloads: 10000000,
            isNew: false,
            downloadUrls: {
                windows: "https://www.sublimetext.com/download_thanks?target=win-x64",
                linux: "https://www.sublimetext.com/download_thanks?target=x64-deb",
                macos: "https://www.sublimetext.com/download_thanks?target=mac"
            },
            downloadPage: "https://www.sublimetext.com/",
            fileSize: "18 MB",
            lastUpdated: "2026-1-2"
        },
        {
            id: 10,
            name: "Notepad++",
            category: "Text Editor",
            description: "Fast, simple code editor for Windows.",
            os: ["windows"],
            rating: 4.7,
            downloads: 100000000,
            isNew: false,
            downloadUrls: {
                windows: "https://notepad-plus-plus.org/downloads/"
            },
            downloadPage: "https://notepad-plus-plus.org/",
            fileSize: "5 MB",
            lastUpdated: "2026-1-1"
        },
        {
            id: 11,
            name: "Java (JDK)",
            category: "Dev Kit",
            description: "Standard development kit for Java apps.",
            os: ["linux", "windows", "macos"],
            rating: 4.4,
            downloads: 1000000000,
            isNew: false,
            downloadUrls: {
                windows: "https://download.oracle.com/java/25/latest/jdk-25_windows-x64_bin.exe",
                linux: "https://download.oracle.com/java/25/latest/jdk-25_linux-aarch64_bin.tar.gz",
                macos: "https://download.oracle.com/java/25/latest/jdk-25_macos-aarch64_bin.dmg"
            },
            downloadPage: "https://www.oracle.com/java/",
            fileSize: "160 MB",
            lastUpdated: "2026-1-1"
        },
        {
            id: 12,
            name: "Node.js",
            category: "Runtime",
            description: "JavaScript runtime for server-side code.",
            os: ["linux", "windows", "macos"],
            rating: 4.8,
            downloads: 1000000,
            isNew: false,
            downloadUrls: {
                windows: "https://nodejs.org/dist/v24.13.0/node-v24.13.0-x64.msi",
                linux: "https://nodejs.org/dist/v24.13.0/node-v24.13.0-linux-x64.tar.xz",
                macos: "https://nodejs.org/dist/v24.13.0/node-v24.13.0.pkg"
            },
            downloadPage: "https://nodejs.org/",
            fileSize: "30 MB",
            lastUpdated: "2026-1-1"
        }
    ],
    "games": [
        {
            id: 51,
            name: "SuperTuxKart",
            category: "Racing",
            description: "A fun 3D open-source kart racing game featuring Tux and friends.",
            os: ["linux", "windows", "macos"],
            rating: 4.2,
            downloads: 850000,
            isNew: false,
            downloadUrls: {
                windows: "https://github.com/supertuxkart/stk-code/releases/download/1.5/SuperTuxKart-1.5-installer-x86_64.exe",
                macos: "https://github.com/supertuxkart/stk-code/releases/download/1.4/SuperTuxKart-1.4-mac.zip",
                linux: "https://github.com/supertuxkart/stk-code/releases/download/1.5/SuperTuxKart-1.5-linux-x86_64.tar.gz"
            },
            downloadPage: "https://supertuxkart.net/Download",
            fileSize: "700 MB",
            lastUpdated: "2025-10-22"
        },
        {
            id: 52,
            name: "0 A.D.",
            category: "Strategy",
            description: "A free, open-source real-time strategy game of ancient warfare.",
            os: ["linux", "windows", "macos"],
            rating: 4.5,
            downloads: 520000,
            isNew: false,
            downloadUrls: {
                windows: "https://releases.wildfiregames.com/0ad-0.0.26-alpha-win32.exe",
                macos: "https://releases.wildfiregames.com/0ad-0.0.26-alpha-osx.dmg",
                linux: "https://releases.wildfiregames.com/0ad-0.0.26-alpha-linux.tar.xz"
            },
            downloadPage: "https://play0ad.com/download/",
            fileSize: "1.2 GB",
            lastUpdated: "2025-09-18"
        },
        {
            id: 53,
            name: "The Dark Mod",
            category: "Stealth",
            description: "A fan-made spiritual successor to the Thief series, focused on stealth gameplay.",
            os: ["linux", "windows"],
            rating: 4.8,
            downloads: 310000,
            isNew: true,
            downloadUrls: {
                windows: "https://www.thedarkmod.com/sources/thedarkmod.2.10/windows/thedarkmod-2.10.exe",
                linux: "https://www.thedarkmod.com/sources/thedarkmod.2.10/linux/thedarkmod-2.10.tar.xz"
            },
            downloadPage: "https://www.thedarkmod.com/downloads/",
            fileSize: "5.2 GB",
            lastUpdated: "2025-11-30"
        },
        {
            id: 54,
            name: "Among Us",
            category: "Multiplayer / Casual",
            description: "A social deduction game of teamwork and betrayal in space.",
            os: ["windows"],
            rating: 4.1,
            downloads: 500000000,
            isNew: false,
            downloadUrls:{
                windows: "https://ankergames.net/game/among-us",
                macos: "https://apps.apple.com/us/app/among-us/id1351168404"
            },
            downloadPage: "https://www.innersloth.com/games/among-us/",
            fileSize: "0.5 GB",
            lastUpdated: "2026-1-1"
        },
        {
            id: 55,
            name: "Minecraft Bedrock Trial Launcher",
            category: "Game Tool",
            description: "Minecraft Bedrock launcher , Create, Build , explore.",
            os: ["linux", "windows", "macos"],
            rating: 4.9,
            downloads: 1980000,
            isNew: false,
            downloadUrls: {
                windows: "https://www.minecraft.net/en-us/free-trial",
                macos: "https://www.minecraft.net/en-us/free-trial",
                linux: "https://www.minecraft.net/en-us/free-trial"
            },
            downloadPage: "https://www.minecraft.net/en-us/download",
            fileSize: "50 MB", 
            lastUpdated: "2026-1-13"
        },
        {
            id: 56,
            name: "Tlauncher",
            category: "Game Tool",
            description: "Third-party launcher for Minecraft versions.",
            os: ["linux", "windows", "macos"],
            rating: 3.5,
            downloads: 100000000,
            isNew: false,
            downloadUrls: {
                windows: "https://tlauncher.org/",
                macos: "https://tlauncher.org/",
                linux: "https://tlauncher.org/"
            },
            downloadPage: "https://tlauncher.org/",
            fileSize: "25 MB",
            lastUpdated: "2026-1-1"
        },
        {
            id: 57,
            name: "Subnautica",
            category: "Survival",
            description: "Underwater survival adventure on alien planet.",
            os: ["windows"],
            rating: 4.8,
            downloads: 5000000,
            isNew: true,
            downloadUrls: {
                windows: "https://ankergames.net/game/subnautica"
            },
            downloadPage: "https://store.steampowered.com/app/264710/Subnautica/",
            fileSize: "3.3 GB",
            lastUpdated: "2025-9-19"
        },
        {
            id: 58,
            name: "God of War Ragnorok",
            category: "Action / RPG",
            description: "Kratos' Norse odyssey action-adventure.",
            os: ["windows"],
            rating: 4.9,
            downloads: 23000000,
            isNew: false,
            downloadUrls: {
                windows: "https://ankergames.net/game/god-of-war"
            },
            downloadPage: "https://www.playstation.com/en-in/god-of-war/",
            fileSize: "70 GB",
            lastUpdated: "2025-3-13"
        },
        {
            id: 59,
            name: "Bully Scholarship Edition",
            category: "Adventure",
            description: "Navigate school social hierarchy as Jimmy Hopkins.",
            os: ["windows"],
            rating: 4.7,
            downloads: 1000000,
            isNew: false,
            downloadUrls: {
                windows: "https://ankergames.net/game/bully-scholarship-edition"
            },
            downloadPage: "https://www.rockstargames.com/games/bully",
            fileSize: "2.4 GB",
            lastUpdated: "2025-12-18"
        },
        {
            id: 60,
            name: "Sky: Children of the Light",
            category: "Social RPG",
            description: "Peaceful social MMO adventure across 7 realms.",
            os: ["windows"],
            rating: 4.7,
            downloads: 50000000,
            isNew: false,
            downloadUrls: {
                windows: "https://store.steampowered.com/app/2325290/Sky_Children_of_the_Light/",
                macos: "https://apps.apple.com/us/app/sky-children-of-the-light/id1462117269"
            },
            downloadPage: "https://store.steampowered.com/app/2325290/Sky_Children_of_the_Light/",
            fileSize: "1.5 GB",
            lastUpdated: "2026-1-4"
        }
    ]
};
