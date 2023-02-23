
pkg install wget -y

```bash
wget https://github.com/jtvserver/jtvserver.github.io/releases/download/1.2/install.sh;sh install.sh
````

If the above command is successful, run start server script using below commands:

```bash
cd ~
```

```bash
sh start.sh
```
Till here, your server will start. This activity is one time only. Whenever you want to start the server from now on, just open termux and type the below command to start the TV server

```bash
sh start.sh
```


The server will now start.
Now go to your mobile's chrome browser and open http://localhost:3500/

## Control panel operations
There a server console will get open. It's time to fill up the details there. Below are the things that you have to do.

### Jio Login
If you are running the server for the first time, probably you need to login using your Jio number and password. In order to generate password, you can click on link mentioned there. <br>
Now use these credentials to login. In case login is successful, you will receive a success message and the status will change to Logged in. <br>
In case your working playlist stopped suddenly and IP information is correct, you can relogin using the same process.



### Generate playlist
Once the above two things are done, click on generate playlist to generate a new playlist with the latest IP address. <br>

NOTE: In case you are changing the network and updating the IP, you have to regenerate the playlist.

### Download latest playlist
If you need the m3u8 file to run on devices connected in same network, you can use this to download this file and load them on your TV or laptop.<br>

NOTE: In case you are changing the network and updating the IP and regenrating the playlist, please use this option to re download the latest updated playlist.

### Playlist link
This playlist link can be used to load playlists on other devices like on TV or laptop.

## Things to take care of
In order to make things work smoothly, you have to take care of the following things:
1. Your phone and your TV must be connected to same wi-fi.
1. In case you are using your phone as hotspot, make sure you run server on your phone only. Or other phone which is using your hotspot.
1. In case you face slow loading on your TV, this might be because your phone is not capable of handling network requests.
1. If you change your network, please perform the following steps:
   1. See your IP in phone's settings.
   1. Update it on server control panel.
   1. Generate playlist again.
   1. Load the playlist again on your TV/Laptop/Mobile.

## Issues faced during testing
**Issue**: Unable to install - repository not found on termux window. <br>
**Solution**: follow all [instructions](https://github.com/dhruv-2015/JTVServer/blob/master/repo_fix.md)
<br><br>
**Issue**:  Installation is not happening.<br>
**Solution**: Make sure you have copied the second command properly.
<br><br>
**Issue**: Getting ERR_TLS_CERT_ALTNAME_INVALID.<br>
**Solution**: This issue is fixed

<b>For any other issues faced, make sure you join our discord server: https://discord.gg/b6d8wZA8K6 </b>
<b>Our telegram group is closed and is no more available. Please join discord for all latest official communications </b>

Thanks for using this.<br>
Stay tuned with all the updates in our discord server.
