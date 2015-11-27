# Fortran for Visual Studio Code

An extension for VS Code which provides support for the Fortran language.

Supports:
* Syntax highlighting
* Code snippets

## Usage
### Install the extension in VS Code
* Open the command palette using `Ctrl+Shift+P`
* Type `ext install Fortran` in the command palette

### Select Fortran as a language
* On the bottom-right corner, click on the *select language mode* button, if you have created a new file it should display *Plain Text*
* Select *Fortran* in the list of languages.

Alternatively, saving the file with a `.f90` extension, will allow VS Code to understand that it is a MATLAB file, and automatically select the language correctly.

### Using snippets
* Bring-up the *autocomplete* menu by hitting the `Ctrl+Shift` key combination
* Select the snippet that you want to use in the list
* Use `tab` to navigate trough the snippet's variables

### Remark
Code snippets and syntax highlighting were imported from the [TextMate bundle](https://github.com/textmate/fortran.tmbundle).