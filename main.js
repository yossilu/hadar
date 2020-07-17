const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");
// const server = require(path.join(__dirname, 'Supervisor-back/server'));


let win;


createWindow = () => {
    win = new BrowserWindow({
        width: 1980,
        height: 1024,
        backgroundColor: '#ffffff',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            nativeWindowOpen: true
          }
    })
    win.loadURL(
        url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: "file:",
        slashes: true
      }));

    win.loadFile(`dist/index.html`)
        
        
    
}


app.on('closed', () => {
    win = null;
})

// app.on('ready', createWindow);
app.on('ready', createWindow);
app.on('open-url', (event, url) => {
    console.log(event, url)
})

app.on('window-all-closed', () => {
    app.quit();
    // if(process.platform !== 'darwin'){
        
    // }
    
})

app.on('activate', () => {

    if(win === null){
        createWindow();
    }

})

