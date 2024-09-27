import { IdWrapper } from "@/app/types/global.types";
import { User } from "@/app/types/users.types";
import { getDirectoryPath } from "@/app/utils/getDirectoryPath";
import { parseJsonFile } from "@/app/utils/parseJsonFile";
import { NextResponse } from "next/server";

const USERS_DIRECTORY = getDirectoryPath("users.json");

type Params = {
  id: string;
};

const GET = async (request: Request, context: { params: Params }) => {
  const { id } = context.params;
  if (!id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);

  const user = users.find((user) => user.id === id);
  if (user) {
    return NextResponse.json(user);
  }
  return NextResponse.json({ error: "not found" }, { status: 404 });
};

export { GET };
