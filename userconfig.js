let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: (window.PRIVATE_CONFIG && window.PRIVATE_CONFIG.weatherLocation) || 'Moscow',
    scale: "C",
  },
  clock: {
    format: "h:i:s ",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      s: ["http://localhost:8080/search?q=", "SearXNG"],
      g: ["https://github.com/search?q=", "GitHub"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      ya: ["https://yandex.ru/search/?text=", "Yandex"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.deepseek.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "max",
            url: "https://web.max.ru/",
            icon: "brand-messenger",
            icon_color: "#a9b",
          },
          {                                 
            name: "cinny",                 
            url: "http://localhost:8081/home/", 
            icon: "brand-matrix",           
            icon_color: "#8fb482",          
          },                                
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
                  ],
      }, {
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {                                  
            name: "dzen",                 
            url: "https://dzen.ru/subscriptions-manager", 
            icon: "sparkles",    
            icon_color: "#f2f3ff",           
          },                                 

          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
           {                                  
             name: "rutube",                 
             url: "https://rutube.ru/", 
             icon: "brand-youtube",    
             icon_color: "#da6972",           
           },                                 
        ],
      }, {
        name: "Music",
        links: [
          {
            name: "youtube-music",
            url: "https://music.youtube.com/",
            icon: "disc",
            icon_color: "#ea6962",
          },
          {
            name: "yandex-music",
            url: "https://music.yandex.ru",
            icon: "north-star",
            icon_color: "#e78a4e",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://ru.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {                                   
              name: "flickr",                
              url: "https://flickr.com/explore/", 
              icon: "camera",          
              icon_color: "#ed6984",            
            },                                  
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "color-picker",
              url: "https://www.figma.com/color-picker/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe-color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#a3899b",
            },
          ],
        },
        {
          name: "resources-3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "arch-wiki",
              url: "https://wiki.archlinux.org/",
              icon: "navigation",
              icon_color: "#7daea3",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "docs-python",
              url: "https://docs.python.org/3/",
              icon: "brand-python",
              icon_color: "#ea5f",
            },
            {                                    
              name: "stackoverflow",               
              url: "https://ru.stackoverflow.com/", 
              icon: "brand-stackoverflow",              
              icon_color: "#ea6f2f",               
            },                                   
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "linux",
          links: [
            {
              name: "linux.org.ru",
              url: "https://linux.org.ru",
              icon: "brand-coreos",
              icon_color: "#a9b665",
            },
            {
              name: "archlinux-forum_ru",
              url: "https://archlinux.com.ru/",
              icon: "navigation",
              icon_color: "#7daea3",
            },
            {
              name: "ask-ubuntu",
              url: "https://ask-ubuntu.ru",
              icon: "brand-ubuntu",
              icon_color: "#ea6f2f",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail-1",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {                                           
              name: "gmail-2",                            
              url: "https://mail.google.com/mail/u/1/", 
              icon: "brand-gmail",                      
              icon_color: "#ea6962",                    
            },                                          
            {                                           
              name: "yandex-mail",                            
              url: "https://mail.yandex.ru", 
              icon: "mail",                      
              icon_color: "#e3b962",                    
            },                                          

          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {                                                     
              name: "yandex-disk",                                      
              url: "https://disk.yandex.ru", 
              icon: "brand-onedrive",                         
              icon_color: "#e78a4e",                              
            },                                                    

            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
