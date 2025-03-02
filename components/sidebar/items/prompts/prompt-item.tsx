import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextareaAutosize } from "@/components/ui/textarea-autosize"
import { PROMPT_NAME_MAX } from "@/prisma/limits"
import { IconPencil } from "@tabler/icons-react"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { Prompts } from "@/types"
import { SidebarItem } from "../all/sidebar-display-item"

interface PromptItemProps {
  prompt: Prompts
}

export const PromptItem: FC<PromptItemProps> = ({ prompt }) => {
  const { t } = useTranslation()
  const [name, setName] = useState(prompt.name)
  const [content, setContent] = useState(prompt.content)
  const [isTyping, setIsTyping] = useState(false)
  return (
    <SidebarItem
      item={prompt}
      isTyping={isTyping}
      contentType="prompts"
      icon={<IconPencil size={30} />}
      updateState={{ name, content }}
      renderInputs={() => (
        <>
          <div className="space-y-1">
            <Label>{t("Name")}</Label>

            <Input
              placeholder={t("Prompt name...")}
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={PROMPT_NAME_MAX}
              onCompositionStart={() => setIsTyping(true)}
              onCompositionEnd={() => setIsTyping(false)}
            />
          </div>

          <div className="space-y-1">
            <Label>{t("Prompt")}</Label>

            <TextareaAutosize
              placeholder={t("Prompt...")}
              value={content}
              onValueChange={setContent}
              minRows={6}
              maxRows={20}
              onCompositionStart={() => setIsTyping(true)}
              onCompositionEnd={() => setIsTyping(false)}
            />
          </div>
        </>
      )}
    />
  )
}
