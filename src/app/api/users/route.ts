import { IdWrapper } from "@/app/types/global.types";
import { User } from "@/app/types/users.types";
import { getDirectoryPath } from "@/app/utils/getDirectoryPath";
import { parseJsonFile } from "@/app/utils/parseJsonFile";
import { NextResponse } from "next/server";

const USERS_DIRECTORY = getDirectoryPath("users.json");

const GET = async () => {
  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
  return NextResponse.json(users);
};

export { GET };
