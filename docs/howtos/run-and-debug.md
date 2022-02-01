# Run and Debug JavaScript files
This howto descibes how we can run and debug JavaScript files

## Run a single file
Assuming we jave Node.js installed we can very easily run any JavaScript file. If we have a file called *hello.js* we can run it from the terminal using 

```
node hello.js
```

## Run and Debug currently open file (VS Code)
We can run and debug the currently open file in Visual Studio Code if we set our .vscode/launch.json as follows

``` json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}"
        }
    ]
}
```
