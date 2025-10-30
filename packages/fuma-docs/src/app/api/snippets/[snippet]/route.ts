import { readdir, readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ snippet: string }> }
) {
  const { snippet } = await params;
  if (!snippet.match(/^[a-zA-Z0-9_-]+$/)) {
    return NextResponse.json(
      {
        error: "Invalid snippet name",
      },
      { status: 400 }
    );
  }

  const snippetsDir = path.join(process.cwd(), "snippets");
  const snippets = await readdir(snippetsDir, { encoding: "utf-8" });

  const targetSnippet = snippets.find((dirName) => dirName === snippet);

  if (!targetSnippet) {
    return NextResponse.json(
      {
        error: "Snippet not found",
      },
      {
        status: 404,
      }
    );
  }

  const files = await readdir(path.join(snippetsDir, targetSnippet), {
    encoding: "utf-8",
  });

  const commonFiles = await readdir(path.join(snippetsDir, "__common"), {
    encoding: "utf-8",
  });

  const fileData: Record<string, string> = {};

  for (const file of files) {
    const filePath = path.join(snippetsDir, targetSnippet, file);
    const fileContent = await readFile(filePath, { encoding: "utf-8" });
    fileData[file] = fileContent;
  }

  for (const file of commonFiles) {
    const filePath = path.join(snippetsDir, "__common", file);
    const fileContent = await readFile(filePath, { encoding: "utf-8" });
    fileData[file] = fileContent;
  }

  return NextResponse.json({
    files: fileData,
  });
}
