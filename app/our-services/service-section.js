import ServiceCard from "./service-card";
import Image from "next/image";
import engservicesText from "@/public/images/Services.webp";
import arabicservicesText from "@/public/images/خدمات.png";
import servicesProject from "@/public/images/projects/448...1.jpg";
import engineering from "@/public/images/Services-images/Engineering Service/25.jpg";
import design from "@/public/images/Services-images/Engineering Service/24.jpg";
import tender from "@/public/images/Services-images/Tendering-Services/453.jpg";
import supervision from "@/public/images/Services-images/Supervision/21.jpg";
import clientEng from "@/public/images/Services-images/Client-Engineer-Representative/27.jpg";
import program from "@/public/images/Services-images/Program-Management-Services/554.jpg";
import designBuild from "@/public/images/Services-images/Design-Build-Project/46445.jpg";
import GIS from "@/public/images/Services-images/GIS-Services/65.jpg";

export default function ServiceSection({ lang = "en" }) {
  const isArabic = lang === "ar";

  const translations = {
    en: {
      header: {
        main: "Explore our",
        bold: "comprehensive <br /> Services",
        services: "services",
      },
      services: [
        {
          id: "01",
          title: "Engineering Services",
          image: engineering,
          items: [
            `
                    <div>
   <div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white">Feasibility studies</span></div>

   <div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white">Planning</span></div>

   <div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white">Program development</span></div>

  <div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white">Value engineering</span></div>
    
<div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white">Technical specifications</span></div>
  
  <div class="flex items-center gap-2 group">
    <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
    </svg>
    <span class="text-black group-hover:text-white"> Bills of quantities</span></div>
</div>
                    `,
          ],
          href: "/engineering-service",
        },
        {
          id: "02",
          title: "Design Services",
          image: design,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">Data collection</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">Concept Design</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">Preliminary Design</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">Detailed Design</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">Final Design</span>
    </div>
  </div>
  `
          ],
          href: "/design-services",
        },
        {
          id: "03",
          title: "Tendering Services",
          image: tender,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Conditions of Contracts</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Pre qualification of tender</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Invitation to tender</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Tender Analysis</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Final Report &</span>
    </div>
    <div class="flex items-center gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">Contract Award</span>
    </div>
  </div>
  `
          ],
          href: "/tenderings-services",
        },
        {
          id: "04",
          title: "Supervision",
          image: supervision,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Supervision of construction</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Quality</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Time & Cost Control</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Claims & Commissioning</span></div>
  </div>
  `
          ],
          href: "/supervision",
        },
        {
          id: "05",
          title: "Client Engineer Representative Role",
          image: clientEng,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Integrated within</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Client s organization</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Co Location with clients</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">For Better Coordination</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Project Interfaces Management</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">On time or better completion</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">On Budget or better completion</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Quality compliance</span></div>
  </div>
  `
          ],
          href: "/client-engineer-representative-role",
        },
        {
          id: "06",
          title: "Program Management Services",
          image: program,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Project life cycle schedules</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Cost Management</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Stakeholders Management</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Quality Assurance & Control</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Resources Management</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Procurement</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Document Control</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Dissemination</span></div>
  </div>
  `
          ],
          href: "/program-management-services",
        },
        {
          id: "07",
          title: "Design & Build Project Participation",
          image: designBuild,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Work closely with the Contractor</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Produce Effective Value</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Engineering Ideas</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Project lifecycle schedules</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Preserving budget</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Schedule concern</span></div>
  </div>
  `
          ],
          href: "/design-build-project-participation",
        },
        {
          id: "08",
          title: "GIS Services",
          image: GIS,
          items: [
            `
  <div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Enterprise Solutions</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Consultancy Services & Strategy Development</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Data Modeling Development</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Analysis & Visualization</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Solution Design</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Development & Integration</span></div>
    <div class="flex items-center gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">Capacity BLDG, Operation & Support</span></div>
  </div>
  `
          ],
          href: "/gis-services",
        },
      ],
    },

    ar: {
      header: {
        main: "استكشف",
        bold: "خدماتنا <br /> المتكاملة",
        services: "الخدمات",
      },
      services: [
        {
          id: "01",
          num: "١",
          title: "الخدمات الهندسية",
          image: engineering,
          items: [
            `<div>
  <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">دراسات الجدوى</span>
  </div>

  <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التخطيط</span>
  </div>

  <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تطوير البرامج</span>
  </div>

 <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white"> هندسة القيمة</span>
  </div>

  <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">المواصفات الفنية</span>
  </div>

  <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">جداول الكميات</span>
  </div>
</div>`,
          ],
          href: "/ar/engineering-service",
        },
        {
          id: "02",
          num: "٢",
          title: "خدمات التصميم",
          image: design,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">جمع البيانات</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">التصميم المفاهيمي</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">التصميم المبدئي</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">التصميم التفصيلي</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
      </svg>
      <span class="text-black group-hover:text-white">التصميم النهائي</span>
    </div>
  </div>
  `
          ],
          href: "/ar/design-services",
        },
        {
          id: "03",
          num: "٣",
          title: "خدمات المناقصات",
          image: tender,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">شروط العقود</span>
    </div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">التأهيل المسبق للمناقصات</span>
    </div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">دعوة لتقديم العطاءات</span>
    </div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">تحليل العطاءات</span>
    </div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">التقرير النهائي</span>
    </div>
    <div class="flex items-center flex-row-reverse gap-2 group">
      <svg class="w-1.5 h-1.5 fill-black group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg>
      <span class="text-black group-hover:text-white">ترسية العقد</span>
    </div>
  </div>
  `
          ],
          href: "/ar/tenderings-services",
        },
        {
          id: "04",
          num: "٤",
          title: "الإشراف",
          image: supervision,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الإشراف على أعمال البناء</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">ضبط الجودة</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التحكم في الوقت والتكلفة</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">المطالبات والتشغيل</span></div>
  </div>
  `
          ],
          href: "/ar/supervision",
        },
        {
          id: "05",
          num: "٥",
          title: "دور ممثل مهندس العميل",
          image: clientEng,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الاندماج ضمن</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">هيكل مؤسسة العميل</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التواجد المشترك مع العميل</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">لتعزيز التنسيق</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">إدارة واجهات المشروع</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الإنجاز في الوقت المحدد أو أفضل</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الالتزام بالميزانية أو أفضل</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الالتزام بمعايير الجودة</span></div>
  </div>
  `
          ],
          href: "/ar/client-engineer-representative-role",
        },
        {
          id: "06",
          num: "٦",
          title: "خدمات إدارة البرامج",
          image: program,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تحديد الجدول الزمني للمشروع</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">إدارة التكاليف</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">إدارة العلاقات بين الأطراف المعنية</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">مراقبة الجودة</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">إدارة الموارد</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تأمين الاحتياجات</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">إدارة الملفات</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التوجيه والإرشاد</span></div>
  </div>
  `
          ],
          href: "/ar/program-management-services",
        },
        {
          id: "07",
          num: "٧",
          title: "المشاركة في مشاريع التصميم والبناء",
          image: designBuild,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">العمل عن قرب مع</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">المقاول</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تقديم حلول هندسية ذات قيمة فعّالة</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">أفكار هندسية مبتكرة</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">جداول دورة حياة المشروع</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الحفاظ على الميزانية</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الالتزام بالجدول الزمني</span></div>
  </div>
  `
          ],
          href: "/ar/design-build-project-participation",
        },
        {
          id: "08",
          num: "٨",
          title: "خدمات نظم المعلومات الجغرافية (GIS)",
          image: GIS,
          items: [
            `
  <div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">حلول مؤسسية</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">الخدمات الاستشارية وتطوير الاستراتيجيات</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تطوير نماذج البيانات</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التحليل والتصور</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">تصميم الحلول</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">التطوير والتكامل</span></div>
    <div class="flex items-center flex-row-reverse gap-2 group"><svg class="w-1.5 h-1.5 fill-black group-hover:fill-white"  viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/></svg><span class="text-black group-hover:text-white">بناء القدرات، التشغيل والدعم</span></div>
  </div>
  `
          ],
          href: "/ar/gis-services",
        },
      ],
    },
  };

  const services = translations[lang].services;
  const header = translations[lang].header;

  return (
    <section className={`py-16 px-4 md:px-8 lg:px-12 ${isArabic ? "rtl " : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center relative mb-10">
          {isArabic ?
            <Image
              src={arabicservicesText}
              width={800}
              height={300}
              alt="services"
              className="w-auto h-auto mx-auto"
            />
            :
            <Image
              src={engservicesText}
          width={800}
          height={300}
          alt="services"
          className="w-auto h-auto mx-auto"
                    />
}
          <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1
              className="text-2xl md:text-5xl text-nowrap mb-2"
              dangerouslySetInnerHTML={{ __html: `${header.main} <span class="text-primary font-bold">${header.bold}</span>` }}
            />
          </div>
        </div>
        {/* Services Grid */}
        {/* <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isArabic ? "" : ""}`}
                 >
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} isArabic={isArabic} />
                    ))}
                </div> */}
        <div
          className={`flex flex-wrap gap-6 ${isArabic ? "flex-row-reverse" : "flex-row"}`}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ServiceCard service={service} isArabic={isArabic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}