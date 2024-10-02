import fs from "fs";

export interface SaveFileUseCase {
  execute:(options: Options) => boolean;
}

export interface Options {
    content: string;
    fileName?: string;
    path?: string;
}

export class SaveFileUseCaseImpl implements SaveFileUseCase {
    
    execute(options: Options): boolean {
        const { content, fileName = 'table', path = 'output' } = options;
        try {
            //create output folder
                fs.mkdirSync(path, { recursive: true });
            //write file
                fs.writeFileSync(`${path}/${fileName}.txt`, content);
                return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
