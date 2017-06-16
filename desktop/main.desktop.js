let electron = require('electron');

let app = electron.app;
let shell = electron.shell;
let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;

if (process.env.NODE_DEV === 'Development') {
    require('electron-debug');
}

app.on('window-all-closed', () => {
    if (process.platform === 'darwin' ||
        process.platform === 'win32') {
        console.log('Closing the Application ...');

        app.exit();
    }
});

let appTitle = 'Angular 2 - Application in Desktop';

app.on('ready', () => {
    let applicationMainWindow = new BrowserWindow({
        width: 900,
        height: 620,
        title: appTitle
    });

    applicationMainWindow.loadURL('http://localhost:5555');
    applicationMainWindow.on('close', () => {
        applicationMainWindow = null;
    });

    let helpMenu = {
        label: 'Help',
        submenu: [
            {
                label: 'Learn More',
                click: () => {
                    shell.openExternal('https://github.com/iomegak12');
                }
            }
        ]
    };

    let menuTemplate = [
        {
            label: '&File',
            submenu: [
                { label: '&Close', accelerator: 'Ctrl+W', click: () => applicationMainWindow.close() },
                {
                    label: '&Developer Tools', accelerator: 'F12', click: () =>
                        applicationMainWindow.toggleDevTools() }
            ]
        },
        helpMenu
    ];

    let applicationMenu = Menu.buildFromTemplate(menuTemplate);

    applicationMainWindow.setMenu(applicationMenu);
});