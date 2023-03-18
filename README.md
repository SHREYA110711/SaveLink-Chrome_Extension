# SaveLink-Chrome_Extension
SaveLink is a Google Chrome extension that allows users to save links to websites they want to visit later. The extension provides a user interface with input fields for adding links, buttons for saving and deleting links, and an unordered list that displays saved links.

The following files are included in the repository:

index.html: This is an HTML file that provides the structure and content for the user interface of the "SaveLink" Google Chrome extension. It contains HTML elements such as input fields, buttons, and an unordered list. The file also includes a reference to a CSS stylesheet and a JavaScript file to provide styling and functionality to the user interface.

index.css: This is a CSS stylesheet file that provides styling for the HTML elements in index.html. It includes rules such as font styles, padding, and margin properties for different HTML elements. The file also includes some CSS selectors to target specific buttons and links.

index.js: This is a JavaScript file that provides functionality to the user interface in index.html. It includes code that saves user input and links to local storage, renders the links in an unordered list, and provides event listeners for buttons such as "SAVE INPUT", "SAVE TAB", and "DELETE ALL". The file also includes some code that uses the Chrome extension API to access and interact with browser tabs.

manifest.json:This is a JSON file that provides configuration information for the "SaveLink" Google Chrome extension. It includes fields such as manifest_version, version, name, action, and permissions. The file specifies the version of the manifest file, the version of the extension, the name of the extension, the default popup and icon, and the permissions required for the extension to function correctly.

icon.png: it contains the image for icon.

Usage

To use the extension, first download or clone the repository. Then, follow these steps:

1.Open Google Chrome.

2.Click on the three dots in the upper-right corner of the screen to open the Chrome menu.

3.Select "More tools" and then "Extensions" from the menu.

4.Turn on "Developer mode" in the upper-right corner of the "Extensions" page.

5.Click "Load unpacked" and select the directory where you downloaded or cloned the repository.

6.Click on the "SaveLink" extension icon in the Chrome toolbar to open the extension's user interface.

7.Use the input field to add links and the "SAVE INPUT" button to save them.

8.Use the "SAVE TAB" button to save the current tab's link.

9.Use the "DELETE ALL" button to delete all saved links.
