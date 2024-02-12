import { title } from "@/components/primitives";

import { Card, User } from "@nextui-org/react";

export default async function  UsersPage() {

  interface Users {
    id: number,
    name: string,
    email: string,
    website: string,
    phone: string
  }


  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users[] = await response.json()

  const randPicture = ['https://i.pravatar.cc/150?u=a04258114e29026702d', 'https://i.pravatar.cc/150?u=a042581f4e29026024d', 'https://i.pravatar.cc/150?u=a04258a2462d826712d', 'https://i.pravatar.cc/150?u=a042581f4e29026704d', 'https://i.pravatar.cc/150?u=a04258114e29026302d', 'https://i.pravatar.cc/150?u=a04258114e29026702d', 'https://i.pravatar.cc/150?u=a04258114e29026708c']

	return (
		<div>
			<h1 className={title()}>Users</h1>
			
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-7">
  {users.map((_, index) => (
    <Card key={index} className="space-y-1 p-4 text-left"> {/* Added text-left class */}
      <User
        name={_.name}
        description={_.email}
        avatarProps={{
          src: randPicture[Math.floor(Math.random() * randPicture.length)],
        }}
      />
    </Card>
  ))}
</div>
		</div>
	);
}
