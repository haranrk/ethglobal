import { ReactElement, useState } from "react";
import { useClient } from "../hooks/useClient";
import { useEnsName, useEnsAvatar } from 'wagmi'
import { Field, Tag, Typography, Avatar, RecordItem, EnsSVG, Heading, Textarea, Button, Select, Card, WalletSVG, FlameSVG } from '@ensdomains/thorin'


export default function UserProfile(): ReactElement {
  const client = useClient();

  const address = "0x937C0d4a6294cdfa575de17382c7076b579DC176"
  // const address = "0x1792DD5A4b75F45b2DAB732a848E65B487f7e33c"
  const ensName = useEnsName({ address: address });
  const ensAvatar = useEnsAvatar({ address: address });
  const [editingBio, setEditingBio] = useState(false)
  const categoryOptions = ["Web Designer", "Web Developer"].map((c) => ({ value: c, label: c }))
  const [user, setUser] = useState({
    "bio": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dignissimos saepe facere velit illum commodi, esse praesentium, odio adipisci temporibus laboriosam vitae, magnam rerum! Voluptates beatae repellat et consequuntur. Quia!",
    "category": "Web Designer",
    "preferences": ["Web Designer", "Web Developer"],
  })
  return (
    <div className="flex p-10 flex-col gap-5">
      <div>
        <Heading>Profile</Heading>
      </div>
      < div className="flex gap-5">
        <div className="w-32">
          <Avatar src={ensAvatar?.data || undefined} label="userAvatar"></Avatar>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <RecordItem icon={<FlameSVG />} inline value={client?.address}>
              {client?.address}
            </RecordItem>
          </div>
          {ensName.data &&
            <div>
              <RecordItem icon={<EnsSVG />} inline value={ensName.data}>
                {ensName.data}
              </RecordItem>
            </div>

          }
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Textarea label="Bio" disabled={!editingBio} defaultValue={user.bio} onChange={(e) => { setUser(u => { return { ...u, bio: e.target.value } }) }} />
        <Button className=" w-10" size="small" onClick={() => setEditingBio(!editingBio)} colorStyle={editingBio ? "greenPrimary" : "bluePrimary"}>{editingBio ? "Save" : "Edit"}</Button>
      </div>
      <div>
        <Select
          label="Category"
          options={categoryOptions}
          value={user.category}
          onChange={(e) => { setUser(u => { return { ...u, category: e.target.value } }) }}
          size="small"
        />
      </div>
      <div>
        <Field label="User preferences">
          <div className="flex gap-2">
            {user.preferences.map((p) => <Tag key={p}>{p}</Tag>)}
          </div>
        </Field>
      </div>
    </div>
  )

}