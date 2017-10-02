import vscode = require('vscode');

export class FortranDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    public provideDocumentSymbols(
        document: vscode.TextDocument,
        token: vscode.CancellationToken): vscode.SymbolInformation[] {

        const functionRegex = /^(?:pure|PURE|recursive|RECURSIVE)?\s+(?:function|FUNCTION)\s+(?:\w+)\s*(?:\(\w+\s*(?:,\s*\w+\s*)*\))(?:\s+(?:result|RESULT)(?:\(\w+\s*(?:,\s*\w+\s*)*\)))?$/;

        const result: vscode.SymbolInformation[] = [];

        for (let line = 0; line < document.lineCount; line++) {
            const { text } = document.lineAt(line);

            if (functionRegex.test(text)) {
                result.push(
                    new vscode.SymbolInformation(
                        text,
                        vscode.SymbolKind.Function,
                        '',
                        new vscode.Location(document.uri, new vscode.Position(line, 0))
                    ));
            }
        }

        return result;
    }
}
