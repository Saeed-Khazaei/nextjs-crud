import { IdWrapper } from "@/app/types/global.types";
import { User } from "@/app/types/users.types";
import { getDirectoryPath } from "@/app/utils/getDirectoryPath";
import { parseJsonFile } from "@/app/utils/parseJsonFile";
import { uuid4 } from "@/app/utils/uuid4";
import fs from "fs";
import { NextResponse } from "next/server";

const USERS_DIRECTORY = getDirectoryPath("users.json");

const GET = async () => {
  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
  return NextResponse.json(users);
};

const POST = async (request: Request) => {
  const body: User = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "bad request" }, { status: 403 });
  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);

  const newUser = { ...body, id: uuid4() };

  const modifiedUsers = [...users, newUser];

  await fs.writeFileSync(USERS_DIRECTORY, JSON.stringify(modifiedUsers));

  return NextResponse.json(newUser);
};

export { GET, POST };
