import { Button, TextInput, Text } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

import FileUpload from "~/components/file-upload";
import FileList from "~/components/file-list";
import { useUserId } from "~/hooks";

const Home: NextPage = () => {
  const { userId } = useUserId();
  return (
    <>
      <Head>
        <title>Chat with large documents</title>
        <meta name="description" content="Bellingcat Hackhathon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="">
        <div className="container flex h-screen">
          <div className="flex w-full max-w-sm flex-col bg-[#FBFBFB] p-4">
            <FileUpload />
            <FileList />
            <Text color="dimmed" size="xs" className="sticky bottom-0 mt-auto">
              {userId}
            </Text>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex-1 overflow-y-auto bg-white p-8">messages here</div>
            <div className="sticky bottom-0 p-8">
              <div className="flex gap-2">
                <TextInput type="text" className="flex-1" placeholder="Type your message..." />
                <Button variant="filled" color="blue">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
