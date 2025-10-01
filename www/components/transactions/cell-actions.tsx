import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "../ui/dropdown-menu"
import {
  EllipsisVerticalIcon,
  InfoIcon,
  PencilIcon,
  Trash2Icon,
  type LucideIcon
} from "lucide-react"
import { Button } from "../ui/button"

type Action = {
  category: string
  actions: { label: string; icon: LucideIcon }[]
}

export function CellActions() {
  const actions: Action[] = [
    {
      category: "Actions",
      actions: [
        {
          label: "Edit",
          icon: PencilIcon
        },
        {
          label: "Details",
          icon: InfoIcon
        }
      ]
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {actions.map(action => (
          <>
            <DropdownMenuLabel>{action.category}</DropdownMenuLabel>
            {action.actions.map(actionItem => (
              <DropdownMenuItem>
                <actionItem.icon />
                {actionItem.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </>
        ))}
        <DropdownMenuItem>
          <Trash2Icon/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
