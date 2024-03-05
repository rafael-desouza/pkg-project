import path from "path"
import YAML from 'yamljs'


export const getConfigValue = <T>(key: string): T | undefined => {
  const configsPath = path.resolve(process.cwd(), 'configs.yaml')
  const { [key]: configValue } = YAML.load(configsPath)
  return configValue as T
}