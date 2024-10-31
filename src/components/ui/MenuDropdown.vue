<script setup lang="ts">
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-vue-next'
</script>

<template>
    <div class="relative">
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
            <Button variant="outline" class=" px-[4px] py-[3px] hover:cursor-pointer hover:bg-white border-none">
                <div class ="hover:filter hover:brightness-0 hover:contrast-100">
                    <img src="/src/assets/menu-01-stroke-rounded.svg" alt="avatar"  />
                </div>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  align="end" class="w-56 mt-2 absolute right-0 origin-top-right flex p-2 gap-2 min-w-[600px]">
                <div class="flex-1">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel class="flex items-center gap-[12px]">
                            <Keyboard class="mr-2 h-6 w-6" />
                            Company
                        </DropdownMenuLabel>
                        <div class="pl-[46px] hover:!bg-white hover:cursor-pointer text-red">
                            <DropdownMenuItem >
                            <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                            <span>Billing</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                            <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                            <span>Keyboard shortcuts</span>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuGroup>
                </div> 
                <div class="flex-1">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel class="flex items-center">
                            <Keyboard class="mr-2 h-4 w-4" />
                            Company
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                        <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Keyboard shortcuts</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </div>       
                <div class="flex-1">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel class="flex items-center">
                            <Keyboard class="mr-2 h-4 w-4" />
                            Company
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                        <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <span>Keyboard shortcuts</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </div>             
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>