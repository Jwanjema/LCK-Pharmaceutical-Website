import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from './ui/sidebar';

export default function SidebarDemo() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="relative">
        <div className="absolute top-4 right-4 z-50">
          <SidebarTrigger />
        </div>

        <Sidebar side="left" variant="sidebar" collapsible="icon">
          <SidebarHeader>
            <div className="text-sm font-medium text-[#003366]">Demo Menu</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button>Overview</button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button>Insights</button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button>Contact</button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="text-xs text-gray-600 px-2 py-3">Sidebar demo</div>
          </SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
