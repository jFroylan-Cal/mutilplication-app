import { createTable } from "../domain/use-cases/create-table.use-case";
import { SaveFileUseCaseImpl } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    outputPath: string;
    fileName: string;
}

export class serverApp {
    static run({ base, limit, showTable, outputPath, fileName }: RunOptions) {
        const table = new createTable().execute({ base, limit });
        const wasSaved = new SaveFileUseCaseImpl().execute({ content: table , fileName, path: outputPath });
        if (wasSaved) {
            console.log('file created');
        }
        
    }
}